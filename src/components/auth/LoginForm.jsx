import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

export function LoginForm({ onSuccess, onSwitchToSignup }) {
  const { signIn, loading, authError, clearError } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

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
    
    if (!formData?.email || !formData?.password) {
      return
    }

    const { error } = await signIn(formData?.email, formData?.password)
    
    if (!error) {
      onSuccess?.()
    }
  }

  const handleDemoLogin = async () => {
    const { error } = await signIn('trader@example.com', 'Trader123!')
    if (!error) {
      onSuccess?.()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In to Your Account
        </h2>

        {authError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{authError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading || !formData?.email || !formData?.password}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or try demo account</span>
            </div>
          </div>

          <Button
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
          >
            Login as Demo Trader
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Do not have an account?{' '}
            <button
              onClick={() => onSwitchToSignup?.()}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm