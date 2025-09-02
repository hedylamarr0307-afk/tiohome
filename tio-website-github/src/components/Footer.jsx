import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-tio-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold text-tio-green">TI</div>
              <div className="w-6 h-6 bg-tio-green rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black transform rotate-45"></div>
              </div>
              <div className="text-xl font-bold text-tio-green">TIO</div>
            </div>
            <p className="text-gray-300 mb-4">
              Trust in Origin - 신뢰할 수 있는 원산지 정보를 제공하는 플랫폼입니다.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 TIO. All rights reserved.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="/businesses" className="text-gray-300 hover:text-white transition-colors">
                  사업장 정보
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-300">
              <li>이메일: info@tio.com</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울특별시 강남구</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
