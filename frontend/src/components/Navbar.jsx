import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            {/* Logo */}
            <Link to='/'><img className='w-36' src={assets.logo} alt="Logo" /></Link>

            {/* Menu Desktop */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1 hover:text-black'>
                    <p>TRANG CHỦ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-black'>
                    <p>BỘ SƯU TẬP</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-black'>
                    <p>GIỚI THIỆU</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-black'>
                    <p>LIÊN HỆ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-black hidden' />
                </NavLink>
            </ul>

            {/* Icon bên phải */}
            <div className='flex items-center gap-6'>
                {/* Tìm kiếm */}
                <img 
                    onClick={() => { setShowSearch(true); navigate('/collection') }} 
                    className='w-5 cursor-pointer hover:scale-110 transition' 
                    src={assets.search_icon} 
                    alt="Tìm kiếm" 
                />
                
                {/* Hồ sơ người dùng */}
                <div className='group relative'>
                    <img 
                        onClick={() => { navigate('/login') }} 
                        className='w-5 cursor-pointer hover:scale-110 transition' 
                        src={assets.profile_icon} 
                        alt="Tài khoản" 
                    />

                    {/* Dropdown */}
                    <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
                        <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-600 rounded-lg shadow-lg'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Hồ sơ của tôi</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Đơn hàng</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Đăng xuất</p>
                        </div>
                    </div>
                </div>

                {/* Giỏ hàng */}
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5 hover:scale-110 transition' src={assets.cart_icon} alt="Giỏ hàng" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>

                {/* Nút menu mobile */}
                <img 
                    onClick={() => setVisible(true)} 
                    className='w-5 cursor-pointer sm:hidden hover:scale-110 transition' 
                    src={assets.menu_icon} 
                    alt="Menu" 
                />
            </div>

            {/* Sidebar Mobile */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ease-in-out shadow-lg ${visible ? 'w-3/4' : 'w-0'} overflow-hidden`}>
                <div className='flex flex-col text-gray-600 h-full'>
                    
                    {/* Header Sidebar */}
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 border-b cursor-pointer hover:bg-gray-100'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Đóng" />
                        <p>Quay lại</p>
                    </div>

                    {/* Links */}
                    <NavLink onClick={() => setVisible(false)} to="/" className='py-3 pl-6 border-b hover:bg-gray-100'>TRANG CHỦ</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-3 pl-6 border-b hover:bg-gray-100'>BỘ SƯU TẬP</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-3 pl-6 border-b hover:bg-gray-100'>GIỚI THIỆU</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-3 pl-6 border-b hover:bg-gray-100'>LIÊN HỆ</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
