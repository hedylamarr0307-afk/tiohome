import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, MapPin, Phone, Calendar, Building } from 'lucide-react'

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([])
  const [filteredBusinesses, setFilteredBusinesses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)

  const categories = [
    '음식점',
    '한의원',
    '가구점',
    '의류점',
    '농산물도소매점',
    '수산물도소매점',
    '축산물도소매점'
  ]

  // 샘플 데이터
  useEffect(() => {
    const sampleBusinesses = [
      {
        id: '1',
        name: '맛있는 한식당',
        category: '음식점',
        address: '서울특별시 강남구 테헤란로 123',
        phone: '02-1234-5678',
        joinDate: '2024-01-15',
        qrCode: 'https://example.com/qr1',
        description: '신선한 국내산 재료만을 사용하는 한식당입니다.'
      },
      {
        id: '2',
        name: '건강한 한의원',
        category: '한의원',
        address: '서울특별시 서초구 서초대로 456',
        phone: '02-2345-6789',
        joinDate: '2024-02-20',
        qrCode: 'https://example.com/qr2',
        description: '전통 한약재의 원산지를 철저히 관리하는 한의원입니다.'
      },
      {
        id: '3',
        name: '자연가구',
        category: '가구점',
        address: '경기도 성남시 분당구 정자로 789',
        phone: '031-3456-7890',
        joinDate: '2024-03-10',
        qrCode: 'https://example.com/qr3',
        description: '친환경 목재만을 사용하여 제작하는 가구점입니다.'
      },
      {
        id: '4',
        name: '스타일 의류',
        category: '의류점',
        address: '부산광역시 해운대구 해운대로 321',
        phone: '051-4567-8901',
        joinDate: '2024-04-05',
        qrCode: 'https://example.com/qr4',
        description: '유기농 면과 친환경 소재만을 사용하는 의류점입니다.'
      },
      {
        id: '5',
        name: '신선농산물',
        category: '농산물도소매점',
        address: '대구광역시 수성구 동대구로 654',
        phone: '053-5678-9012',
        joinDate: '2024-05-12',
        qrCode: 'https://example.com/qr5',
        description: '직거래로 신선한 농산물을 공급하는 도소매점입니다.'
      },
      {
        id: '6',
        name: '바다수산물',
        category: '수산물도소매점',
        address: '인천광역시 중구 해안대로 987',
        phone: '032-6789-0123',
        joinDate: '2024-06-18',
        qrCode: 'https://example.com/qr6',
        description: '국내산 신선 수산물을 직접 어획하여 공급합니다.'
      },
      {
        id: '7',
        name: '건강축산물',
        category: '축산물도소매점',
        address: '충청남도 천안시 동남구 천안대로 147',
        phone: '041-7890-1234',
        joinDate: '2024-07-25',
        qrCode: 'https://example.com/qr7',
        description: '무항생제 사료로 키운 건강한 축산물을 공급합니다.'
      }
    ]
    
    setBusinesses(sampleBusinesses)
    setFilteredBusinesses(sampleBusinesses)
    setLoading(false)
  }, [])

  useEffect(() => {
    let filtered = businesses

    if (searchTerm) {
      filtered = filtered.filter(business =>
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(business => business.category === selectedCategory)
    }

    setFilteredBusinesses(filtered)
  }, [searchTerm, selectedCategory, businesses])

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            사업장 정보
          </h1>
          <p className="text-xl text-gray-600">
            신뢰할 수 있는 원산지 정보를 제공하는 사업장들을 만나보세요
          </p>
        </div>

        {/* 검색 및 필터 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 검색 */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="사업장명, 주소, 설명으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* 카테고리 필터 */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field pl-10"
              >
                <option value="">모든 업종</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* 결과 수 */}
            <div className="flex items-center justify-center md:justify-end">
              <span className="text-gray-600">
                총 <span className="font-semibold text-tio-blue">{filteredBusinesses.length}</span>개 사업장
              </span>
            </div>
          </div>
        </div>

        {/* 사업장 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {business.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(business.category)}`}>
                  {business.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {business.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="truncate">{business.address}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <span>가입일: {business.joinDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to={`/businesses/${business.id}`}
                  className="btn-primary text-sm px-4 py-2"
                >
                  상세보기
                </Link>
                <div className="text-xs text-gray-500">
                  QR코드: {business.qrCode}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 결과가 없을 때 */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600">
              다른 검색어나 필터를 시도해보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BusinessList
