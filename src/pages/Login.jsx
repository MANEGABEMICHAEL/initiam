import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, Shield, ArrowRight } from 'lucide-react'
import { useAuth } from '../components/AuthContext'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState('client')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    const result = login(formData.email, formData.password)
    
    if (result.success) {
      navigate(result.redirect)
    } else {
      setError(result.error || 'Erreur de connexion')
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-initam-blue to-initam-green flex">
      {/* Left Side - Image/Info */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-6">
                INITAM
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Plateforme de gestion de projets innovants pour un développement durable
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chers Clients</h3>
                    <p className="text-blue-100">Suivez vos projets et gérez vos abonnements</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
            
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Connexion' : 'Inscription'}
              </h2>
              <p className="text-gray-600">
                {isLogin ? 'Accédez à votre espace personnel' : 'Créez votre compte INITAM'}
              </p>
            </div>

            {/* Instructions */}
            <div className="mb-6 p-4 bg-initam-light rounded-lg">
              <p className="text-sm text-initam-blue text-center">
                🔐 Entrez vos identifiants pour accéder à votre espace
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600 text-center">{error}</p>
              </div>
            )}

            {/* User Type Selection - Masqué pour l'instant */}
            <div className="mb-6 hidden">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de compte
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('client')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    userType === 'client'
                      ? 'border-initam-blue bg-initam-light text-initam-blue'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <User className="mx-auto mb-1" size={20} />
                  <span className="text-sm font-medium">Client</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('admin')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    userType === 'admin'
                      ? 'border-initam-blue bg-initam-light text-initam-blue'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Shield className="mx-auto mb-1" size={20} />
                  <span className="text-sm font-medium">Admin</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent pl-10"
                      placeholder="Votre nom"
                      required
                    />
                    <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent pl-10"
                    placeholder="votre@email.com"
                    required
                  />
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent pl-10 pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent pl-10"
                      placeholder="••••••••"
                      required
                    />
                    <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
              )}

              {/* Remember me & Forgot password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-initam-blue border-gray-300 rounded focus:ring-initam-blue"
                    />
                    <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-sm text-initam-blue hover:underline">
                    Mot de passe oublié?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                {isLogin ? 'Se connecter' : 'S\'inscrire'}
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>

            {/* Switch between login/register */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? 'Pas encore de compte?' : 'Déjà un compte?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-initam-blue font-semibold hover:underline"
                >
                  {isLogin ? 'S\'inscrire' : 'Se connecter'}
                </button>
              </p>
            </div>

            {/* Mobile Money Notice */}
            
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
