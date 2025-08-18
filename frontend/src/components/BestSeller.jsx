import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])

    return (
        <div className='my-10'>
            {/* Tiêu đề */}
            <div className='text-center text-3xl py-8'>
                <Title text1={"SẢN PHẨM"} text2={"BÁN CHẠY"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-3 leading-relaxed'>
                    Khám phá những sản phẩm được yêu thích nhất, chất lượng đảm bảo và luôn được khách hàng tin tưởng lựa chọn.
                </p>
            </div>

            {/* Danh sách sản phẩm */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <div 
                            key={index} 
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <ProductItem 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
