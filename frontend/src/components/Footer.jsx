import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-6'>

        {/* Logo + mô tả */}
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Chào mừng bạn đến với cửa hàng của chúng tôi. 
            Nơi mang đến những sản phẩm chất lượng, giá cả hợp lý 
            và dịch vụ tận tâm để bạn luôn hài lòng khi mua sắm.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-gray-800'>CÔNG TY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Giao hàng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <p className='text-xl font-medium mb-5 text-gray-800'>LIÊN HỆ</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+84-375-062-764</li>
            <li>hatrughieu@gmail.com</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer
