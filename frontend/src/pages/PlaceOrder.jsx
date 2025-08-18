import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

            {/* Thông tin giao hàng */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'THÔNG TIN'} text2={'GIAO HÀNG'} />
                </div>

                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Tên' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Họ' />
                </div>

                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Đường' />

                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Thành phố' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Tỉnh/Thành' />
                </div>

                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Mã bưu điện' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Quốc gia' />
                </div>

                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Số điện thoại' />
            </div>

            {/* Thông tin thanh toán */}
            <div className='mt-8'>

                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>

                <div className='mt-12'>
                    <Title text1={'PHƯƠNG THỨC'} text2={'THANH TOÁN'} />
                    <div className='flex gap-3 flex-col lg:flex-row'>

                        <div onClick={() => setMethod('momo')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'momo' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.momo_logo} alt="" />
                        </div>

                        <div onClick={() => setMethod('vnpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'vnpay' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.vnpay_logo} alt="" />
                        </div>

                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className=' text-gray-500 text-sm font-medium mx-4'>Thanh toán khi nhận hàng</p>
                        </div>

                    </div>

                    <div className='w-full text-end mt-8'>
                        <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>ĐẶT HÀNG</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PlaceOrder
