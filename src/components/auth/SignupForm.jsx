import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

export function SignupForm({ onSuccess, onSwitchToLogin }) {
  const { signUp, loading, authError, clearError } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    role: 'member'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e?.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    clearError()
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()
    
    if (!formData?.email || !formData?.password || !formData?.fullName) {
      return
    }

    if (formData?.password !== formData?.confirmPassword) {
      return
    }

    if (formData?.password?.length < 6) {
      return
    }

    const { error } = await signUp(
      formData?.email, 
      formData?.password,
      {
        full_name: formData?.fullName,
        role: formData?.role
      }
    )
    
    if (!error) {
      onSuccess?.()
    }
  }

  const passwordsMatch = formData?.password === formData?.confirmPassword
  const isPasswordValid = formData?.password?.length >= 6

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Create Your Account
        </h2>

        {authError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{authError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData?.fullName}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData?.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Account Type
            </label>
            <Select
              id="role"
              name="role"
              value={formData?.role}
              onChange={handleChange}
              className="w-full"
            >
              <option value="member">Member</option>
              <option value="trader">Trader</option>
              <option value="premium">Premium</option>
            </Select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData?.password}
                onChange={handleChange}
                required
                className="w-full pr-10"
                placeholder="Create a password (min 6 characters)"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {formData?.password && !isPasswordValid && (
              <p className="mt-1 text-sm text-red-600">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData?.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pr-10"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {formData?.confirmPassword && !passwordsMatch && (
              <p className="mt-1 text-sm text-red-600">
                Passwords do not match
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={
              loading || 
              !formData?.email || 
              !formData?.password || 
              !formData?.fullName || 
              !passwordsMatch || 
              !isPasswordValid
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => onSwitchToLogin?.()}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm