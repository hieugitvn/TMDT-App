import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      {/* Tiêu đề */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'LIÊN HỆ'} text2={'VỚI CHÚNG TÔI'} />
      </div>

      {/* Thông tin liên hệ */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-2xl shadow-md' src={assets.contact_img} alt="Liên hệ" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-gray-600'>Cửa hàng của chúng tôi</p>
          <p className=' text-gray-500'>
            <br />Địa chỉ: Bắc Ninh
          </p>
          <p className=' text-gray-500'>
            Điện thoại: 0375062764 <br /> Email: shophth@gmail.com
          </p>
          <p className=' font-semibold text-xl text-gray-600'>Cơ hội nghề nghiệp tại cửa hàng chúng tôi</p>
          <p className=' text-gray-500'>Khám phá thêm về đội ngũ và các vị trí tuyển dụng.</p>
          <button className='border border-black px-8 py-4 text-sm rounded-xl hover:bg-black hover:text-white transition-all duration-500'>
            Xem việc làm
          </button>
        </div>
      </div>

      {/* Form đăng ký nhận tin */}
      <NewsletterBox />

    </div>
  )
}

export default Contact
