import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      {/* Chính sách đổi hàng */}
      <div className='px-4'>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="Đổi hàng" />
        <p className='font-semibold'>Chính sách đổi hàng dễ dàng</p>
        <p className='text-gray-500'>Chúng tôi hỗ trợ đổi hàng nhanh chóng, không rắc rối</p>
      </div>

      {/* Chính sách hoàn trả */}
      <div className='px-4'>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="Hoàn trả" />
        <p className='font-semibold'>Chính sách hoàn trả trong 7 ngày</p>
        <p className='text-gray-500'>Miễn phí hoàn trả trong vòng 7 ngày</p>
      </div>

      {/* Hỗ trợ khách hàng */}
      <div className='px-4'>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="Hỗ trợ khách hàng" />
        <p className='font-semibold'>Hỗ trợ khách hàng tốt nhất</p>
        <p className='text-gray-500'>Đội ngũ hỗ trợ 24/7, luôn sẵn sàng giúp bạn</p>
      </div>

    </div>
  )
}

export default OurPolicy
