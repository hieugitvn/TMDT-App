import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>

      {/* Tiêu đề */}
      <p className='text-2xl font-medium text-gray-800'>
        Đăng ký ngay & nhận ưu đãi 20%
      </p>
      <p className='text-gray-500 mt-3'>
        Nhập email của bạn để không bỏ lỡ tin tức và khuyến mãi hấp dẫn.
      </p>

      {/* Form */}
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-xl pl-3 shadow-sm overflow-hidden'>
        <input 
          className='w-full sm:flex-1 outline-none px-3 py-3 text-sm'
          type="email" 
          placeholder='Nhập email của bạn' 
          required 
        />
        <button 
          className='bg-black text-white text-xs px-8 py-3 hover:bg-gray-800 transition-all rounded-r-xl'
          type='submit'
        >
          ĐĂNG KÝ
        </button>
      </form>

    </div>
  )
}

export default NewsletterBox
