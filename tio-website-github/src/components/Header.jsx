import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu, X, User, LogOut } from 'lucide-react'

const Header = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 섹션 */}
          <div className="flex items-center space-x-4">
            {/* 첫 번째 로고 (TI + 별) */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-tio-green">TI</div>
              <div className="w-6 h-6 bg-tio-green rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black transform rotate-45"></div>
              </div>
            </div>
            
            {/* 두 번째 로고 (TIO + 체크리스트) */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="w-8 h-8 bg-tio-blue rounded-lg flex items-center justify-center relative">
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 bg-black transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold text-tio-green">TIO</div>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-tio-blue transition-colors">
              홈
            </Link>
            <Link to="/businesses" className="text-gray-700 hover:text-tio-blue transition-colors">
              사업장 정보
            </Link>
            {currentUser && (
              <Link to="/dashboard" className="text-gray-700 hover:text-tio-blue transition-colors">
                대시보드
              </Link>
            )}
          </nav>

          {/* 사용자 메뉴 */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">
                  {currentUser.name}님
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut size={16} />
                  <span>로그아웃</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-gray-700 hover:text-tio-blue transition-colors">
                  로그인
                </Link>
                <Link to="/register" className="btn-primary">
                  회원가입
                </Link>
              </div>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-tio-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-tio-blue transition-colors">
                홈
              </Link>
              <Link to="/businesses" className="text-gray-700 hover:text-tio-blue transition-colors">
                사업장 정보
              </Link>
              {currentUser && (
                <Link to="/dashboard" className="text-gray-700 hover:text-tio-blue transition-colors">
                  대시보드
                </Link>
              )}
              {!currentUser && (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-tio-blue transition-colors">
                    로그인
                  </Link>
                  <Link to="/register" className="text-gray-700 hover:text-tio-blue transition-colors">
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
