import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/auth/LoginForm';
import { SignupForm } from '../../components/auth/SignupForm';

export function Login() {
  const navigate = useNavigate()
  const [isLoginMode, setIsLoginMode] = useState(true)

  const handleSuccess = () => {
    navigate('/')
  }

  const handleSwitchMode = () => {
    setIsLoginMode(!isLoginMode)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Trading Platform
          </h1>
          <p className="text-gray-600">
            {isLoginMode ? 'Welcome back!' : 'Join our trading community'}
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {isLoginMode ? (
          <LoginForm 
            onSuccess={handleSuccess}
            onSwitchToSignup={handleSwitchMode}
          />
        ) : (
          <SignupForm 
            onSuccess={handleSuccess}
            onSwitchToLogin={handleSwitchMode}
          />
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Login