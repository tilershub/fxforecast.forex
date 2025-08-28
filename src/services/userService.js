import { supabase } from '../lib/supabase';

export const userService = {
  // Get user bookmarks
  getUserBookmarks: async (userId) => {
    try {
      const { data, error } = await supabase?.from('user_bookmarks')?.select(`
          id,
          created_at,
          article:articles(
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
          )
        `)?.eq('user_id', userId)?.order('created_at', { ascending: false })

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Add bookmark
  addBookmark: async (userId, articleId) => {
    try {
      const { data, error } = await supabase?.from('user_bookmarks')?.insert({
          user_id: userId,
          article_id: articleId
        })?.select()?.single()

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Remove bookmark
  removeBookmark: async (userId, articleId) => {
    try {
      const { error } = await supabase?.from('user_bookmarks')?.delete()?.eq('user_id', userId)?.eq('article_id', articleId)

      if (error) return { error }
      return {}
    } catch (error) {
      return { error }
    }
  },

  // Check if article is bookmarked
  isArticleBookmarked: async (userId, articleId) => {
    try {
      const { data, error } = await supabase?.from('user_bookmarks')?.select('id')?.eq('user_id', userId)?.eq('article_id', articleId)?.single()

      if (error && error?.code !== 'PGRST116') return { error }
      return { isBookmarked: !!data }
    } catch (error) {
      return { error }
    }
  },

  // Get user profile
  getUserProfile: async (userId) => {
    try {
      const { data, error } = await supabase?.from('user_profiles')?.select('*')?.eq('id', userId)?.single()

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Update user profile
  updateUserProfile: async (userId, updates) => {
    try {
      const { data, error } = await supabase?.from('user_profiles')?.update(updates)?.eq('id', userId)?.select()?.single()

      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Upload avatar
  uploadAvatar: async (userId, file) => {
    try {
      const fileExt = file?.name?.split('.')?.pop()
      const fileName = `${userId}/avatar.${fileExt}`
      
      const { data: uploadData, error: uploadError } = await supabase?.storage?.from('avatars')?.upload(fileName, file, { 
          upsert: true,
          contentType: file?.type 
        })

      if (uploadError) return { error: uploadError }

      const { data: { publicUrl } } = supabase?.storage?.from('avatars')?.getPublicUrl(fileName)

      // Update user profile with new avatar URL
      const { data, error } = await supabase?.from('user_profiles')?.update({ avatar_url: publicUrl })?.eq('id', userId)?.select()?.single()

      if (error) return { error }
      return { data, avatarUrl: publicUrl }
    } catch (error) {
      return { error }
    }
  },

  // Get user dashboard stats
  getUserDashboardStats: async (userId) => {
    try {
      // Get counts for various user activities
      const [
        bookmarkResult,
        calculationResult,
        commentResult,
        preferencesResult
      ] = await Promise.all([
        supabase?.from('user_bookmarks')?.select('*', { count: 'exact', head: true })?.eq('user_id', userId),
        supabase?.from('user_calculations')?.select('*', { count: 'exact', head: true })?.eq('user_id', userId),
        supabase?.from('article_comments')?.select('*', { count: 'exact', head: true })?.eq('author_id', userId),
        supabase?.from('user_preferences')?.select('*')?.eq('user_id', userId)?.single()
      ])

      return {
        data: {
          bookmarks: bookmarkResult?.count || 0,
          calculations: calculationResult?.count || 0,
          comments: commentResult?.count || 0,
          preferences: preferencesResult?.data || null
        }
      }
    } catch (error) {
      return { error }
    }
  }
}