import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
  User, 
  Building, 
  MapPin, 
  Phone, 
  Calendar, 
  QrCode, 
  Edit, 
  Plus,
  BarChart3,
  TrendingUp,
  Shield,
  Eye
} from 'lucide-react'

const Dashboard = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [businessData, setBusinessData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
      return
    }

    // 샘플 비즈니스 데이터
    const sampleBusinessData = {
      id: '1',
      name: currentUser.businessName || '사업장명',
      category: currentUser.businessType || '업종',
      address: '서울특별시 강남구 테헤란로 123',
      phone: currentUser.phone || '02-1234-5678',
      joinDate: '2024-01-15',
      qrCode: 'https://example.com/qr1',
      description: '신뢰할 수 있는 원산지 정보를 제공하는 사업장입니다.',
      stats: {
        totalProducts: 24,
        certifiedProducts: 18,
        monthlyViews: 1250,
        customerRating: 4.8
      },
      recentProducts: [
        { id: 1, name: '유기농 쌀', origin: '전라북도 익산', status: '인증완료' },
        { id: 2, name: '친환경 돼지고기', origin: '경기도 안성', status: '검토중' },
        { id: 3, name: '무첨가 김치', origin: '직접 제작', status: '인증완료' }
      ]
    }

    setBusinessData(sampleBusinessData)
    setLoading(false)
  }, [currentUser, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tio-blue mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 환영 메시지 */}
        <div className="bg-gradient-to-r from-tio-blue to-tio-green text-white rounded-xl p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">
            안녕하세요, {currentUser.name}님!
          </h1>
          <p className="text-xl opacity-90">
            TIO 대시보드에 오신 것을 환영합니다.
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-tio-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-600">총 상품 수</p>
                <p className="text-2xl font-bold text-gray-900">
                  {businessData.stats.totalProducts}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-tio-green" />
              </div>
              <div>
                <p className="text-sm text-gray-600">인증된 상품</p>
                <p className="text-2xl font-bold text-gray-900">
                  {businessData.stats.certifiedProducts}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">월간 조회수</p>
                <p className="text-2xl font-bold text-gray-900">
                  {businessData.stats.monthlyViews.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">고객 평점</p>
                <p className="text-2xl font-bold text-gray-900">
                  {businessData.stats.customerRating}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 사업장 정보 */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">사업장 정보</h2>
                <button className="btn-primary">
                  <Edit className="h-4 w-4 mr-2" />
                  정보 수정
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">사업장명:</span>
                  <span className="font-medium">{businessData.name}</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">업종:</span>
                  <span className="font-medium">{businessData.category}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">주소:</span>
                  <span className="font-medium">{businessData.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">연락처:</span>
                  <span className="font-medium">{businessData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">가입일:</span>
                  <span className="font-medium">{businessData.joinDate}</span>
                </div>
                <div className="flex items-center">
                  <QrCode className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600 mr-4">QR코드:</span>
                  <a
                    href={businessData.qrCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tio-blue hover:text-blue-600 font-medium"
                  >
                    {businessData.qrCode}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">사업장 설명</h3>
                <p className="text-gray-600">{businessData.description}</p>
              </div>
            </div>
          </div>

          {/* 최근 상품 */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">최근 상품</h2>
              <button className="btn-secondary">
                <Plus className="h-4 w-4 mr-2" />
                상품 추가
              </button>
            </div>

            <div className="space-y-4">
              {businessData.recentProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === '인증완료' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">원산지: {product.origin}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full btn-primary">
                모든 상품 보기
              </button>
            </div>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">빠른 액션</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-tio-blue hover:bg-blue-50 transition-colors">
                <Plus className="h-6 w-6 text-tio-blue mr-3" />
                <span className="font-medium">새 상품 등록</span>
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-tio-blue hover:bg-blue-50 transition-colors">
                <Edit className="h-6 w-6 text-tio-blue mr-3" />
                <span className="font-medium">정보 수정</span>
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-tio-blue hover:bg-blue-50 transition-colors">
                <QrCode className="h-6 w-6 text-tio-blue mr-3" />
                <span className="font-medium">QR코드 생성</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
