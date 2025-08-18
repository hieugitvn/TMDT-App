import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='w-full bg-white p-4 rounded-xl shadow-md'>
            {/* Tiêu đề */}
            <div className='text-2xl mb-4 text-center'>
                <Title text1={'TỔNG'} text2={'GIỎ HÀNG'} />
            </div>

            {/* Thông tin chi tiết */}
            <div className='flex flex-col gap-3 text-sm'>
                <div className='flex justify-between'>
                    <p>Tạm tính</p>
                    <p>{getCartAmount()} {currency}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Phí vận chuyển</p>
                    <p>{delivery_fee} {currency}</p>
                </div>
                <hr />
                <div className='flex justify-between font-semibold text-gray-800'>
                    <p>Tổng cộng</p>
                    <p>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} {currency}</p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
