import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, MapPin, Phone, Calendar } from 'lucide-react'

const Home = () => {
  const categories = [
    {
      name: '음식점',
      icon: '🍽️',
      description: '신뢰할 수 있는 음식점들의 원산지 정보',
      color: 'bg-red-100 text-red-800'
    },
    {
      name: '한의원',
      icon: '🌿',
      description: '한약재 원산지 추적 시스템',
      color: 'bg-green-100 text-green-800'
    },
    {
      name: '가구점',
      icon: '🪑',
      description: '목재 원산지 및 품질 정보',
      color: 'bg-amber-100 text-amber-800'
    },
    {
      name: '의류점',
      icon: '👕',
      description: '섬유 원산지 및 제조 과정 추적',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: '농산물도소매점',
      icon: '🌾',
      description: '농산물 원산지 및 유통 과정',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: '수산물도소매점',
      icon: '🐟',
      description: '수산물 원산지 및 어획 정보',
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      name: '축산물도소매점',
      icon: '🐄',
      description: '축산물 원산지 및 사육 환경',
      color: 'bg-orange-100 text-orange-800'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-tio-blue to-tio-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            {/* 첫 번째 로고 */}
            <div className="flex items-center space-x-2">
              <div className="text-4xl font-bold">TI</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-tio-blue transform rotate-45"></div>
              </div>
            </div>
            
            {/* 두 번째 로고 */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="w-2 h-2 bg-tio-blue rounded-sm"></div>
                  <div className="w-2 h-2 bg-tio-blue rounded-sm"></div>
                  <div className="w-2 h-2 bg-tio-blue rounded-sm"></div>
                  <div className="w-2 h-2 bg-tio-blue rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-tio-blue transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold">TIO</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Trust in Origin
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            신뢰할 수 있는 원산지 정보로 더 안전하고 투명한 소비를 만들어갑니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/businesses" className="btn-secondary text-lg px-8 py-3">
              사업장 정보 보기
            </Link>
            <Link to="/register" className="bg-white text-tio-blue hover:bg-gray-100 font-semibold text-lg px-8 py-3 rounded-lg transition-colors duration-200">
              회원가입
            </Link>
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              다양한 업종의 원산지 정보
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              음식점부터 농산물, 수산물까지 모든 업종의 원산지 정보를 한 곳에서 확인하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              TIO만의 특별한 서비스
            </h2>
            <p className="text-xl text-gray-600">
              신뢰성과 투명성을 바탕으로 한 원산지 정보 제공
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tio-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">신뢰성</h3>
              <p className="text-gray-600">
                검증된 사업장들의 정확한 원산지 정보를 제공합니다
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tio-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">투명성</h3>
              <p className="text-gray-600">
                모든 정보를 투명하게 공개하여 소비자가 안심할 수 있습니다
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tio-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">추적성</h3>
              <p className="text-gray-600">
                QR코드를 통해 원산지부터 소비자까지의 모든 과정을 추적할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-tio-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            신뢰할 수 있는 원산지 정보로 더 안전한 소비를 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-secondary text-lg px-8 py-3">
              무료 회원가입
            </Link>
            <Link to="/businesses" className="bg-white text-tio-dark hover:bg-gray-100 font-semibold text-lg px-8 py-3 rounded-lg transition-colors duration-200">
              사업장 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
