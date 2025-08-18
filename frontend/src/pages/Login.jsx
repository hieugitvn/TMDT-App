import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Đăng nhập');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

            {/* Tiêu đề */}
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            {/* Trường thông tin */}
            {currentState === 'Đăng nhập' ? null : 
                <input className='w-full px-3 py-2 border border-gray-800 rounded-md' type="text" placeholder='Họ và tên' required />
            }
            <input className='w-full px-3 py-2 border border-gray-800 rounded-md' type="email" placeholder='Email' required />
            <input className='w-full px-3 py-2 border border-gray-800 rounded-md' type="password" placeholder='Mật khẩu' required />

            {/* Quên mật khẩu & chuyển trạng thái */}
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer text-blue-600 hover:underline'>Quên mật khẩu?</p>
                {
                    currentState === 'Đăng nhập'
                        ? <p onClick={() => setCurrentState('Đăng ký')} className='cursor-pointer text-blue-600 hover:underline'>Tạo tài khoản</p>
                        : <p onClick={() => setCurrentState('Đăng nhập')} className='cursor-pointer text-blue-600 hover:underline'>Đăng nhập</p>
                }
            </div>

            {/* Nút xác nhận */}
            <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4 rounded-md'>
                {currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng ký'}
            </button>
        </form>
    )
}

export default Login
