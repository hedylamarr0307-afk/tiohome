import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Phone, Calendar, Building, ArrowLeft, QrCode, Globe, Clock } from 'lucide-react'

const BusinessDetail = () => {
  const { id } = useParams()
  const [business, setBusiness] = useState(null)
  const [loading, setLoading] = useState(true)

  // 샘플 데이터
  useEffect(() => {
    const sampleBusinesses = {
      '1': {
        id: '1',
        name: '맛있는 한식당',
        category: '음식점',
        address: '서울특별시 강남구 테헤란로 123',
        phone: '02-1234-5678',
        joinDate: '2024-01-15',
        qrCode: 'https://example.com/qr1',
        description: '신선한 국내산 재료만을 사용하는 한식당입니다. 매일 아침 시장에서 직접 구매한 신선한 채소와 육류로 정성을 다해 요리합니다. 원산지 정보를 투명하게 공개하여 고객이 안심하고 식사를 즐길 수 있도록 노력하고 있습니다.',
        businessHours: '11:00 - 22:00',
        website: 'https://example.com',
        originInfo: [
          { item: '쌀', origin: '전라북도 익산', certification: '유기농 인증' },
          { item: '돼지고기', origin: '경기도 안성', certification: 'HACCP 인증' },
          { item: '김치', origin: '직접 제작', certification: '무첨가' },
          { item: '채소', origin: '경기도 가평', certification: '친환경 인증' }
        ],
        images: [
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
          'https://images.unsplash.com/photo-1551218808-94e220e79d0e?w=800',
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'
        ]
      },
      '2': {
        id: '2',
        name: '건강한 한의원',
        category: '한의원',
        address: '서울특별시 서초구 서초대로 456',
        phone: '02-2345-6789',
        joinDate: '2024-02-20',
        qrCode: 'https://example.com/qr2',
        description: '전통 한약재의 원산지를 철저히 관리하는 한의원입니다. 모든 한약재는 엄선된 국내산 원료만을 사용하며, 각 재료의 원산지와 재배 환경을 투명하게 공개합니다.',
        businessHours: '09:00 - 18:00',
        website: 'https://example.com',
        originInfo: [
          { item: '인삼', origin: '강원도 홍천', certification: '6년근 홍삼' },
          { item: '당귀', origin: '경상북도 영주', certification: '유기농 인증' },
          { item: '백출', origin: '전라남도 구례', certification: '산지 인증' },
          { item: '감초', origin: '충청남도 서천', certification: '친환경 인증' }
        ],
        images: [
          'https://images.unsplash.com/photo-1576091160399-112c8b76a755?w=800',
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800'
        ]
      }
    }
    
    const businessData = sampleBusinesses[id] || sampleBusinesses['1']
    setBusiness(businessData)
    setLoading(false)
  }, [id])

  const getCategoryColor = (category) => {
    const colors = {
      '음식점': 'bg-red-100 text-red-800',
      '한의원': 'bg-green-100 text-green-800',
      '가구점': 'bg-amber-100 text-amber-800',
      '의류점': 'bg-blue-100 text-blue-800',
      '농산물도소매점': 'bg-emerald-100 text-emerald-800',
      '수산물도소매점': 'bg-cyan-100 text-cyan-800',
      '축산물도소매점': 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

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

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            사업장을 찾을 수 없습니다
          </h3>
          <Link to="/businesses" className="btn-primary">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 뒤로가기 버튼 */}
        <div className="mb-6">
          <Link
            to="/businesses"
            className="inline-flex items-center text-tio-blue hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            사업장 목록으로 돌아가기
          </Link>
        </div>

        {/* 사업장 기본 정보 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {business.name}
                </h1>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(business.category)}`}>
                  {business.category}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                {business.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{business.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                  <span>가입일: {business.joinDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-gray-400" />
                  <span>영업시간: {business.businessHours}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <QrCode className="h-16 w-16 text-tio-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">원산지 정보 QR코드</p>
                <a
                  href={business.qrCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tio-blue hover:text-blue-600 text-sm font-medium"
                >
                  QR코드 보기
                </a>
              </div>
            </div>
          </div>

          {business.website && (
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-600 mr-3">웹사이트:</span>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tio-blue hover:text-blue-600 font-medium"
                >
                  {business.website}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 원산지 정보 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            원산지 정보
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.originInfo.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.item}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">원산지: {item.origin}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">인증: {item.certification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 사업장 이미지 */}
        {business.images && business.images.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              사업장 사진
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {business.images.map((image, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <img
                    src={image}
                    alt={`${business.name} 이미지 ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 연락처 및 방문 안내 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            연락처 및 방문 안내
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                연락처 정보
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">{business.phone}</span>
                </div>
                {business.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3 text-gray-400" />
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tio-blue hover:text-blue-600"
                    >
                      {business.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                방문 안내
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">{business.address}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">{business.businessHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetail
