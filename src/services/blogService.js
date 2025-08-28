import { supabase } from '../lib/supabase';

export const blogService = {
  // Get all published articles with optional category filter
  getPublishedArticles: async (categoryId = null, limit = 20, offset = 0) => {
    try {
      let query = supabase?.from('articles')?.select(`
          id,
          title,
          slug,
          excerpt,
          featured_image_url,
          tags,
          view_count,
          reading_time_minutes,
          is_featured,
          published_at,
          created_at,
          author:user_profiles(id, full_name, avatar_url),
          category:article_categories(id, name, slug, color, icon)
        `)?.eq('status', 'published')?.order('published_at', { ascending: false })

      if (categoryId) {
        query = query?.eq('category_id', categoryId)
      }

      const { data, error } = await query?.range(offset, offset + limit - 1)

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Get featured articles
  getFeaturedArticles: async (limit = 5) => {
    try {
      const { data, error } = await supabase?.from('articles')?.select(`
          id,
          title,
          slug,
          excerpt,
          featured_image_url,
          tags,
          view_count,
          reading_time_minutes,
          published_at,
          author:user_profiles(id, full_name, avatar_url),
          category:article_categories(id, name, slug, color, icon)
        `)?.eq('status', 'published')?.eq('is_featured', true)?.order('published_at', { ascending: false })?.limit(limit)

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Get single article by slug
  getArticleBySlug: async (slug) => {
    try {
      const { data, error } = await supabase?.from('articles')?.select(`
          id,
          title,
          slug,
          excerpt,
          content,
          featured_image_url,
          tags,
          view_count,
          reading_time_minutes,
          is_featured,
          published_at,
          created_at,
          updated_at,
          author:user_profiles(id, full_name, avatar_url, bio),
          category:article_categories(id, name, slug, color, icon)
        `)?.eq('slug', slug)?.eq('status', 'published')?.single()

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Increment view count
  incrementViewCount: async (articleId) => {
    try {
      const { error } = await supabase?.rpc('increment_view_count', { 
        article_id: articleId 
      })
      if (error) return { error }
      return {}
    } catch (error) {
      // Fallback: manual increment if RPC function doesn't exist
      try {
        const { data: article } = await supabase?.from('articles')?.select('view_count')?.eq('id', articleId)?.single()

        if (article) {
          await supabase?.from('articles')?.update({ view_count: (article?.view_count || 0) + 1 })?.eq('id', articleId)
        }
        return {}
      } catch (fallbackError) {
        return { error: fallbackError }
      }
    }
  },

  // Get article categories
  getCategories: async () => {
    try {
      const { data, error } = await supabase?.from('article_categories')?.select('*')?.order('display_order', { ascending: true })

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Get article comments
  getArticleComments: async (articleId) => {
    try {
      const { data, error } = await supabase?.from('article_comments')?.select(`
          id,
          content,
          created_at,
          updated_at,
          parent_id,
          author:user_profiles(id, full_name, avatar_url)
        `)?.eq('article_id', articleId)?.eq('is_approved', true)?.order('created_at', { ascending: true })

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Add comment to article
  addComment: async (articleId, content, parentId = null) => {
    try {
      const { data: { user } } = await supabase?.auth?.getUser()
      if (!user) return { error: { message: 'Authentication required' } }

      const { data, error } = await supabase?.from('article_comments')?.insert({
          article_id: articleId,
          author_id: user?.id,
          content,
          parent_id: parentId
        })?.select(`
          id,
          content,
          created_at,
          updated_at,
          parent_id,
          author:user_profiles(id, full_name, avatar_url)
        `)?.single()

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Search articles
  searchArticles: async (query, limit = 20) => {
    try {
      const { data, error } = await supabase?.from('articles')?.select(`
          id,
          title,
          slug,
          excerpt,
          featured_image_url,
          tags,
          view_count,
          reading_time_minutes,
          published_at,
          author:user_profiles(id, full_name, avatar_url),
          category:article_categories(id, name, slug, color, icon)
        `)?.eq('status', 'published')?.or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)?.order('published_at', { ascending: false })?.limit(limit)

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  }
}