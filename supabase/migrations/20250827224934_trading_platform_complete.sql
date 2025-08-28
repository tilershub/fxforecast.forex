-- Location: supabase/migrations/20250827224934_trading_platform_complete.sql
-- Schema Analysis: Fresh project - no existing schema
-- Integration Type: Complete new schema
-- Dependencies: None (fresh start)

-- 1. TYPES AND ENUMS
CREATE TYPE public.user_role AS ENUM ('admin', 'trader', 'premium', 'member');
CREATE TYPE public.article_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE public.tool_type AS ENUM ('calculator', 'indicator', 'strategy', 'analysis');
CREATE TYPE public.subscription_status AS ENUM ('active', 'inactive', 'trial', 'expired');

-- 2. CORE TABLES (NO FOREIGN KEYS FIRST)

-- Critical intermediary table for auth relationships
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role public.user_role DEFAULT 'member'::public.user_role,
    trading_experience TEXT,
    preferred_instruments TEXT[],
    risk_tolerance DECIMAL(5,2),
    subscription_status public.subscription_status DEFAULT 'trial'::public.subscription_status,
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Article categories
CREATE TABLE public.article_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    color TEXT DEFAULT '#3B82F6',
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trading instruments
CREATE TABLE public.trading_instruments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symbol TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    pip_value DECIMAL(10,4),
    margin_requirement DECIMAL(5,2),
    spread_typical DECIMAL(6,2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. DEPENDENT TABLES (WITH FOREIGN KEYS)

-- Blog articles
CREATE TABLE public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    category_id UUID REFERENCES public.article_categories(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    status public.article_status DEFAULT 'draft'::public.article_status,
    tags TEXT[],
    view_count INTEGER DEFAULT 0,
    reading_time_minutes INTEGER,
    is_featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trading tools and calculators
CREATE TABLE public.trading_tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    tool_type public.tool_type NOT NULL,
    configuration JSONB,
    is_premium BOOLEAN DEFAULT false,
    usage_count INTEGER DEFAULT 0,
    created_by UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- User saved calculations and strategies
CREATE TABLE public.user_calculations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    tool_id UUID REFERENCES public.trading_tools(id) ON DELETE CASCADE,
    instrument_id UUID REFERENCES public.trading_instruments(id) ON DELETE SET NULL,
    calculation_name TEXT NOT NULL,
    input_parameters JSONB NOT NULL,
    results JSONB NOT NULL,
    notes TEXT,
    is_favorite BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- User bookmarks for articles
CREATE TABLE public.user_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, article_id)
);

-- Article comments
CREATE TABLE public.article_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES public.article_comments(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- User settings and preferences
CREATE TABLE public.user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    theme TEXT DEFAULT 'light',
    language TEXT DEFAULT 'en',
    timezone TEXT DEFAULT 'UTC',
    notifications_email BOOLEAN DEFAULT true,
    notifications_browser BOOLEAN DEFAULT true,
    default_account_size DECIMAL(15,2),
    default_risk_percentage DECIMAL(5,2) DEFAULT 2.0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

-- 4. INDEXES FOR PERFORMANCE
CREATE INDEX idx_user_profiles_role ON public.user_profiles(role);
CREATE INDEX idx_user_profiles_subscription ON public.user_profiles(subscription_status);
CREATE INDEX idx_articles_author ON public.articles(author_id);
CREATE INDEX idx_articles_category ON public.articles(category_id);
CREATE INDEX idx_articles_status ON public.articles(status);
CREATE INDEX idx_articles_published ON public.articles(published_at DESC) WHERE status = 'published';
CREATE INDEX idx_articles_featured ON public.articles(is_featured) WHERE is_featured = true;
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_trading_tools_type ON public.trading_tools(tool_type);
CREATE INDEX idx_trading_tools_premium ON public.trading_tools(is_premium);
CREATE INDEX idx_user_calculations_user ON public.user_calculations(user_id);
CREATE INDEX idx_user_calculations_tool ON public.user_calculations(tool_id);
CREATE INDEX idx_user_calculations_favorite ON public.user_calculations(user_id, is_favorite) WHERE is_favorite = true;
CREATE INDEX idx_user_bookmarks_user ON public.user_bookmarks(user_id);
CREATE INDEX idx_article_comments_article ON public.article_comments(article_id);
CREATE INDEX idx_article_comments_author ON public.article_comments(author_id);
CREATE INDEX idx_trading_instruments_active ON public.trading_instruments(is_active) WHERE is_active = true;

-- 5. HELPER FUNCTIONS (BEFORE RLS POLICIES)
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Function for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, full_name, role)
    VALUES (
        NEW.id, 
        NEW.email, 
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'role', 'member')::public.user_role
    );
    RETURN NEW;
END;
$$;

-- 6. TRIGGERS
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TRIGGER handle_updated_at_user_profiles
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_articles
    BEFORE UPDATE ON public.articles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_trading_tools
    BEFORE UPDATE ON public.trading_tools
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_user_calculations
    BEFORE UPDATE ON public.user_calculations
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_article_comments
    BEFORE UPDATE ON public.article_comments
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_user_preferences
    BEFORE UPDATE ON public.user_preferences
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 7. ENABLE ROW LEVEL SECURITY
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trading_instruments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trading_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- 8. RLS POLICIES

-- Pattern 1: Core user table (user_profiles) - Simple ownership
CREATE POLICY "users_manage_own_user_profiles"
ON public.user_profiles
FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Pattern 4: Public read, private write for categories and instruments
CREATE POLICY "public_can_read_article_categories"
ON public.article_categories
FOR SELECT
TO public
USING (true);

CREATE POLICY "admins_manage_article_categories"
ON public.article_categories
FOR ALL
TO authenticated
USING (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
))
WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
));

CREATE POLICY "public_can_read_trading_instruments"
ON public.trading_instruments
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "admins_manage_trading_instruments"
ON public.trading_instruments
FOR ALL
TO authenticated
USING (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
))
WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
));

-- Articles: Public read published, authors manage own
CREATE POLICY "public_can_read_published_articles"
ON public.articles
FOR SELECT
TO public
USING (status = 'published');

CREATE POLICY "authors_manage_own_articles"
ON public.articles
FOR ALL
TO authenticated
USING (author_id = auth.uid())
WITH CHECK (author_id = auth.uid());

-- Trading tools: Public read, creators and admins manage
CREATE POLICY "public_can_read_trading_tools"
ON public.trading_tools
FOR SELECT
TO public
USING (true);

CREATE POLICY "creators_manage_own_trading_tools"
ON public.trading_tools
FOR ALL
TO authenticated
USING (created_by = auth.uid())
WITH CHECK (created_by = auth.uid());

-- Pattern 2: Simple user ownership for user-specific data
CREATE POLICY "users_manage_own_calculations"
ON public.user_calculations
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

CREATE POLICY "users_manage_own_bookmarks"
ON public.user_bookmarks
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

CREATE POLICY "users_manage_own_preferences"
ON public.user_preferences
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Comments: Public read, authors manage own
CREATE POLICY "public_can_read_approved_comments"
ON public.article_comments
FOR SELECT
TO public
USING (is_approved = true);

CREATE POLICY "authors_manage_own_comments"
ON public.article_comments
FOR ALL
TO authenticated
USING (author_id = auth.uid())
WITH CHECK (author_id = auth.uid());

-- 9. MOCK DATA
DO $$
DECLARE
    admin_uuid UUID := gen_random_uuid();
    trader_uuid UUID := gen_random_uuid();
    category_id_1 UUID := gen_random_uuid();
    category_id_2 UUID := gen_random_uuid();
    article_id_1 UUID := gen_random_uuid();
    article_id_2 UUID := gen_random_uuid();
    tool_id_1 UUID := gen_random_uuid();
    instrument_id_1 UUID := gen_random_uuid();
    instrument_id_2 UUID := gen_random_uuid();
BEGIN
    -- Create auth users with required fields
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES
        (admin_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'admin@tradingplatform.com', crypt('TradingAdmin123!', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Trading Admin", "role": "admin"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null),
        (trader_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'trader@example.com', crypt('Trader123!', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Pro Trader", "role": "trader"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null);

    -- Article categories
    INSERT INTO public.article_categories (id, name, slug, description, color, icon) VALUES
        (category_id_1, 'Trading Strategies', 'trading-strategies', 'Comprehensive trading strategies and techniques', '#10B981', 'chart-line'),
        (category_id_2, 'Risk Management', 'risk-management', 'Learn how to manage trading risks effectively', '#F59E0B', 'shield-check'),
        (gen_random_uuid(), 'Market Analysis', 'market-analysis', 'Technical and fundamental analysis guides', '#3B82F6', 'trending-up'),
        (gen_random_uuid(), 'Psychology', 'trading-psychology', 'Master the mental game of trading', '#8B5CF6', 'brain');

    -- Trading instruments
    INSERT INTO public.trading_instruments (id, symbol, name, category, pip_value, margin_requirement, spread_typical) VALUES
        (instrument_id_1, 'EURUSD', 'Euro / US Dollar', 'Major Pairs', 10.0000, 3.33, 0.8),
        (instrument_id_2, 'GBPUSD', 'British Pound / US Dollar', 'Major Pairs', 10.0000, 3.33, 1.2),
        (gen_random_uuid(), 'USDJPY', 'US Dollar / Japanese Yen', 'Major Pairs', 9.1500, 3.33, 0.9),
        (gen_random_uuid(), 'GOLD', 'Gold Spot', 'Commodities', 10.0000, 1.00, 3.5),
        (gen_random_uuid(), 'US30', 'Dow Jones Industrial Average', 'Indices', 1.0000, 5.00, 2.8);

    -- Articles
    INSERT INTO public.articles (id, author_id, category_id, title, slug, excerpt, content, status, tags, reading_time_minutes, is_featured, published_at) VALUES
        (article_id_1, admin_uuid, category_id_1, 'The Complete Guide to Risk Management in Forex Trading', 'complete-guide-risk-management-forex', 
         'Master the fundamentals of risk management to protect your trading capital and achieve consistent profitability.',
         'Risk management is the cornerstone of successful trading. In this comprehensive guide, we will explore the essential principles that separate profitable traders from those who lose money consistently...', 
         'published', ARRAY['risk-management', 'forex', 'money-management'], 12, true, now() - interval '2 days'),
        (article_id_2, admin_uuid, category_id_2, 'Position Sizing: The Key to Long-Term Trading Success', 'position-sizing-trading-success',
         'Learn how to calculate optimal position sizes to maximize returns while minimizing risk in your trading strategy.',
         'Position sizing is one of the most crucial aspects of trading that many beginners overlook. This article will teach you how to calculate the perfect position size for every trade...', 
         'published', ARRAY['position-sizing', 'risk-management', 'strategy'], 8, false, now() - interval '1 day');

    -- Trading tools
    INSERT INTO public.trading_tools (id, name, description, tool_type, configuration, is_premium, created_by) VALUES
        (tool_id_1, 'Position Size Calculator', 'Calculate optimal position sizes based on account balance and risk tolerance', 'calculator', 
         '{"inputs": ["account_balance", "risk_percentage", "stop_loss_pips"], "outputs": ["position_size", "lot_size", "risk_amount"]}'::jsonb, false, admin_uuid),
        (gen_random_uuid(), 'Fibonacci Retracement Tool', 'Advanced Fibonacci analysis for identifying key support and resistance levels', 'indicator', 
         '{"levels": [0, 23.6, 38.2, 50, 61.8, 78.6, 100], "customizable": true}'::jsonb, true, admin_uuid),
        (gen_random_uuid(), 'Risk-Reward Calculator', 'Analyze risk-reward ratios for potential trades', 'calculator', 
         '{"inputs": ["entry_price", "stop_loss", "take_profit"], "outputs": ["risk_reward_ratio", "profit_potential"]}'::jsonb, false, admin_uuid);

    -- User calculations (saved by trader)
    INSERT INTO public.user_calculations (user_id, tool_id, instrument_id, calculation_name, input_parameters, results, notes, is_favorite) VALUES
        (trader_uuid, tool_id_1, instrument_id_1, 'EURUSD Long Setup', 
         '{"account_balance": 10000, "risk_percentage": 2, "stop_loss_pips": 25}'::jsonb,
         '{"position_size": 0.8, "lot_size": 0.08, "risk_amount": 200}'::jsonb, 
         'Conservative setup for EURUSD breakout', true),
        (trader_uuid, tool_id_1, instrument_id_2, 'GBPUSD Swing Trade', 
         '{"account_balance": 10000, "risk_percentage": 1.5, "stop_loss_pips": 40}'::jsonb,
         '{"position_size": 0.375, "lot_size": 0.0375, "risk_amount": 150}'::jsonb, 
         'Weekly swing trade setup', false);

    -- User bookmarks
    INSERT INTO public.user_bookmarks (user_id, article_id) VALUES
        (trader_uuid, article_id_1),
        (trader_uuid, article_id_2);

    -- Article comments
    INSERT INTO public.article_comments (article_id, author_id, content) VALUES
        (article_id_1, trader_uuid, 'Excellent article! The risk management principles outlined here have helped me become more consistent in my trading.'),
        (article_id_2, trader_uuid, 'The position sizing formula is exactly what I was looking for. Thank you for sharing this valuable information.');

    -- User preferences
    INSERT INTO public.user_preferences (user_id, theme, language, default_account_size, default_risk_percentage) VALUES
        (trader_uuid, 'dark', 'en', 10000.00, 2.0);

EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key error: %', SQLERRM;
    WHEN unique_violation THEN
        RAISE NOTICE 'Unique constraint error: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Unexpected error: %', SQLERRM;
END $$;

-- 10. CLEANUP FUNCTION
CREATE OR REPLACE FUNCTION public.cleanup_mock_data()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    mock_user_ids_to_delete UUID[];
BEGIN
    -- Get mock user IDs
    SELECT ARRAY_AGG(id) INTO mock_user_ids_to_delete
    FROM auth.users
    WHERE email LIKE '%@tradingplatform.com' OR email LIKE '%@example.com';

    -- Delete in dependency order (children first)
    DELETE FROM public.article_comments WHERE author_id = ANY(mock_user_ids_to_delete);
    DELETE FROM public.user_bookmarks WHERE user_id = ANY(mock_user_ids_to_delete);
    DELETE FROM public.user_calculations WHERE user_id = ANY(mock_user_ids_to_delete);
    DELETE FROM public.user_preferences WHERE user_id = ANY(mock_user_ids_to_delete);
    DELETE FROM public.articles WHERE author_id = ANY(mock_user_ids_to_delete);
    DELETE FROM public.trading_tools WHERE created_by = ANY(mock_user_ids_to_delete);
    DELETE FROM public.user_profiles WHERE id = ANY(mock_user_ids_to_delete);

    -- Delete auth users last
    DELETE FROM auth.users WHERE id = ANY(mock_user_ids_to_delete);
    
    RAISE NOTICE 'Mock data cleanup completed successfully';
EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key constraint prevents deletion: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Cleanup failed: %', SQLERRM;
END;
$$;