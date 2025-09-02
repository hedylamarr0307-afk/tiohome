import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보 확인
    const user = localStorage.getItem('tio_user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  const login = (userData) => {
    setCurrentUser(userData)
    localStorage.setItem('tio_user', JSON.stringify(userData))
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('tio_user')
  }

  const register = (userData) => {
    setCurrentUser(userData)
    localStorage.setItem('tio_user', JSON.stringify(userData))
  }

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
