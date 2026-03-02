import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (email, password) => {
    // Simulation d'authentification
    if (email === 'admin@initiam.org' && password === 'admin2024') {
      const adminUser = {
        email: 'admin@initiam.org',
        name: 'Administrateur',
        role: 'admin',
        permissions: ['read', 'write', 'delete', 'manage_users', 'validate_payments']
      }
      setUser(adminUser)
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(adminUser))
      return { success: true, redirect: '/admin' }
    } else if (email === 'client@initiam.org' && password === 'initam2024') {
      const clientUser = {
        email: 'client@initiam.org',
        name: 'M Mike',
        role: 'client',
        permissions: ['read', 'manage_own_profile', 'make_payments']
      }
      setUser(clientUser)
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(clientUser))
      return { success: true, redirect: '/tableau-de-bord' }
    } else {
      return { success: false, error: 'Identifiants incorrects' }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const hasPermission = (permission) => {
    return user && user.permissions && user.permissions.includes(permission)
  }

  const isAdmin = () => {
    return user && user.role === 'admin'
  }

  const isClient = () => {
    return user && user.role === 'client'
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth,
    hasPermission,
    isAdmin,
    isClient
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
