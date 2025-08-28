import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import BlogCard from './components/BlogCard';
import SearchFilters from './components/SearchFilters';
import CategoryTabs from './components/CategoryTabs';
import NewsletterSignup from './components/NewsletterSignup';
import RelatedArticles from './components/RelatedArticles';
import AuthorBio from './components/AuthorBio';

const BlogHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedContentType, setSelectedContentType] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering the OUR Framework: A Complete Guide to Systematic Trading',
      excerpt: `Transform your trading from emotional gambling to systematic business practice. This comprehensive guide breaks down each component of the OUR Framework with real-world examples and implementation strategies that have helped over 500 traders pass their FTMO challenges.`,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      category: 'Framework Implementation',
      difficulty: 'Intermediate',
      contentType: 'guide',
      readTime: 15,
      publishDate: 'Dec 20, 2024',
      author: 'Alex Chen',
      slug: 'mastering-our-framework-complete-guide',
      featured: true,
      tags: ['Framework', 'Systematic Trading', 'FTMO']
    },
    {
      id: 2,
      title: 'Position Sizing Calculator: The Math Behind Consistent Profits',
      excerpt: `Learn the precise calculations that separate professional traders from gamblers. Discover how proper position sizing can protect your capital while maximizing growth potential in any market condition.`,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800&h=500&fit=crop',
      category: 'Risk Management',
      difficulty: 'Beginner',
      contentType: 'tutorial',
      readTime: 8,
      publishDate: 'Dec 18, 2024',
      author: 'Alex Chen',
      slug: 'position-sizing-calculator-math-consistent-profits',
      featured: false,
      tags: ['Position Sizing', 'Risk Management', 'Calculator']
    },
    {
      id: 3,
      title: 'FTMO Challenge Psychology: Overcoming the Mental Game',
      excerpt: `The biggest challenge isn't the market—it's your mind. Explore the psychological barriers that cause 80% of traders to fail FTMO challenges and the mental frameworks that guarantee success.`,
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=500&fit=crop',
      category: 'Trading Psychology',
      difficulty: 'Advanced',
      contentType: 'analysis',
      readTime: 12,
      publishDate: 'Dec 15, 2024',
      author: 'Alex Chen',
      slug: 'ftmo-challenge-psychology-mental-game',
      featured: false,
      tags: ['Psychology', 'FTMO', 'Mental Game']
    },
    {
      id: 4,
      title: 'FTMO Challenge Week 1: The Foundation Strategy',
      excerpt: `Your first week determines everything. Learn the exact approach that has helped 78% of our students pass their FTMO challenges, including specific risk parameters and trade selection criteria.`,
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop',
      category: 'FTMO Challenge Prep',
      difficulty: 'Intermediate',
      contentType: 'case-study',
      readTime: 18,
      publishDate: 'Dec 12, 2024',
      author: 'Alex Chen',
      slug: 'ftmo-challenge-week-1-foundation-strategy',
      featured: true,
      tags: ['FTMO', 'Strategy', 'Week 1']
    },
    {
      id: 5,
      title: 'Market Structure Analysis: Reading Price Action Like a Pro',
      excerpt: `Decode market intentions through systematic price action analysis. Learn to identify high-probability setups that align with institutional flow and maximize your edge in any trading session.`,
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800&h=500&fit=crop',
      category: 'Market Analysis',
      difficulty: 'Advanced',
      contentType: 'guide',
      readTime: 20,
      publishDate: 'Dec 10, 2024',
      author: 'Alex Chen',
      slug: 'market-structure-analysis-price-action-pro',
      featured: false,
      tags: ['Market Structure', 'Price Action', 'Analysis']
    },
    {
      id: 6,
      title: 'Risk Management: The 2% Rule and Beyond',
      excerpt: `Why the traditional 2% rule isn't enough for funded account challenges. Discover advanced risk management techniques that adapt to market volatility and account growth phases.`,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      category: 'Risk Management',
      difficulty: 'Intermediate',
      contentType: 'guide',
      readTime: 10,
      publishDate: 'Dec 8, 2024',
      author: 'Alex Chen',
      slug: 'risk-management-2-percent-rule-beyond',
      featured: false,
      tags: ['Risk Management', '2% Rule', 'Advanced']
    }
  ];

  // Filter posts based on search and filters
  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      post?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      post?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || post?.category?.toLowerCase()?.replace(' ', '-') === activeCategory;
    
    const matchesDifficulty = selectedDifficulty === 'all' || 
      post?.difficulty?.toLowerCase() === selectedDifficulty;
    
    const matchesContentType = selectedContentType === 'all' || 
      post?.contentType === selectedContentType;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesContentType;
  });

  const featuredPosts = filteredPosts?.filter(post => post?.featured);
  const regularPosts = filteredPosts?.filter(post => !post?.featured);

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedContentType('all');
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [searchQuery, activeCategory, selectedCategory, selectedDifficulty, selectedContentType]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-brand-royal/5 py-16 lg:py-24">
        <div className="absolute inset-0 noise-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Trading Education Hub
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Transform Trading Into
              <span className="block text-transparent bg-clip-text gradient-brand">
                Systematic Business
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Authority-building content that educates while guiding you toward funded account success. 
              Learn the frameworks, psychology, and risk management that separate professionals from gamblers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Users" size={16} className="mr-2 text-accent" />
                <span>500+ Successful Students</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Trophy" size={16} className="mr-2 text-accent" />
                <span>78% FTMO Pass Rate</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="BookOpen" size={16} className="mr-2 text-accent" />
                <span>47+ In-Depth Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Category Navigation */}
            <CategoryTabs 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />

            {/* Search and Filters */}
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              selectedContentType={selectedContentType}
              setSelectedContentType={setSelectedContentType}
              onClearFilters={handleClearFilters}
            />

            {/* Results Summary */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {searchQuery ? `Search Results` : activeCategory === 'all' ? 'All Articles' : activeCategory?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                  {filteredPosts?.length} {filteredPosts?.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                >
                  <Icon name="X" size={14} className="mr-1" />
                  Clear search
                </button>
              )}
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)]?.map((_, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
                    <div className="aspect-[16/10] bg-muted"></div>
                    <div className="p-6 space-y-3">
                      <div className="flex space-x-2">
                        <div className="h-4 bg-muted rounded w-20"></div>
                        <div className="h-4 bg-muted rounded w-16"></div>
                      </div>
                      <div className="h-6 bg-muted rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Featured Articles */}
                {featuredPosts?.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" size={20} className="text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Featured Articles</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {featuredPosts?.map((post) => (
                        <BlogCard key={post?.id} post={post} featured={true} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Articles */}
                {regularPosts?.length > 0 && (
                  <div className="space-y-6">
                    {featuredPosts?.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <Icon name="Grid3X3" size={20} className="text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Latest Articles</h3>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularPosts?.map((post) => (
                        <BlogCard key={post?.id} post={post} featured={false} />
                      ))}
                    </div>
                  </div>
                )}

                {/* No Results */}
                {filteredPosts?.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Icon name="RotateCcw" size={16} className="mr-2" />
                      Clear all filters
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Load More Button */}
            {filteredPosts?.length > 6 && (
              <div className="text-center pt-8">
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors duration-200">
                  <Icon name="ChevronDown" size={16} className="mr-2" />
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <NewsletterSignup />

            {/* Author Bio */}
            <AuthorBio author="Alex Chen" />

            {/* Related Articles */}
            <RelatedArticles currentPostId={null} category="Framework Implementation" />

            {/* Quick Links */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Zap" size={20} className="mr-2 text-accent" />
                Quick Access
              </h3>
              
              <div className="space-y-3">
                <Link
                  to="/framework-deep-dive"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Target" size={16} className="text-primary" />
                    <span className="text-sm font-medium">OUR Framework</span>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-foreground" />
                </Link>
                
                <Link
                  to="/position-size-calculator"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Calculator" size={16} className="text-success" />
                    <span className="text-sm font-medium">Position Calculator</span>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-foreground" />
                </Link>
                
                <Link
                  to="/trading-tools-suite"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Wrench" size={16} className="text-warning" />
                    <span className="text-sm font-medium">Trading Tools</span>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-foreground" />
                </Link>
                
                <Link
                  to="/ftmo-affiliate-gateway"
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:from-accent/20 hover:to-accent/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="ExternalLink" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">Start FTMO Challenge</span>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-accent group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Hash" size={20} className="mr-2 text-primary" />
                Popular Topics
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['FTMO Challenge', 'Risk Management', 'Position Sizing', 'Trading Psychology', 'Market Analysis', 'Systematic Trading', 'Framework', 'Success Stories']?.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    #{tag?.replace(' ', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-brand-royal/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} className="mr-2" />
            Ready to Apply What You've Learned?
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Turn Knowledge Into Action
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            You've read the strategies. Now it's time to implement them. Start your FTMO challenge journey 
            with the systematic approach that has helped hundreds of traders succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/position-size-calculator"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Calculator" size={16} className="mr-2" />
              Try Position Calculator
            </Link>
            
            <Link
              to="/ftmo-affiliate-gateway"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
            >
              <Icon name="ExternalLink" size={16} className="mr-2" />
              Start FTMO Challenge
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold text-primary">FXFORECAST</span>
                <p className="text-xs text-muted-foreground">Systematic Trading Education</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} FXFORECAST. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Trading involves risk. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogHub;