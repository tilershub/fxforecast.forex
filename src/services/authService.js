import { supabase } from '../lib/supabase';

export const authService = {
  // Get current session
  getSession: async () => {
    try {
      const { data: { session }, error } = await supabase?.auth?.getSession()
      if (error) return { error }
      return { session }
    } catch (error) {
      return { error }
    }
  },

  // Get current user
  getUser: async () => {
    try {
      const { data: { user }, error } = await supabase?.auth?.getUser()
      if (error) return { error }
      return { user }
    } catch (error) {
      return { error }
    }
  },

  // Sign in with email and password
  signInWithPassword: async (email, password) => {
    try {
      const { data, error } = await supabase?.auth?.signInWithPassword({
        email,
        password
      })
      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Sign up with email and password
  signUp: async (email, password, metadata = {}) => {
    try {
      const { data, error } = await supabase?.auth?.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })
      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Sign out
  signOut: async () => {
    try {
      const { error } = await supabase?.auth?.signOut()
      if (error) return { error }
      return {}
    } catch (error) {
      return { error }
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const { data, error } = await supabase?.auth?.resetPasswordForEmail(email)
      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  },

  // Update password
  updatePassword: async (password) => {
    try {
      const { data, error } = await supabase?.auth?.updateUser({
        password
      })
      if (error) return { error }
      return { data }
    } catch (error) {
      return { error }
    }
  }
}