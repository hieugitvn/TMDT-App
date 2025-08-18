import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 5)) 
        }
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"BỘ SƯU TẬP"} text2={"MỚI NHẤT"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-3 leading-relaxed'>
                    Khám phá những mẫu sản phẩm mới nhất vừa được ra mắt. 
                    Thiết kế hiện đại, đa dạng phong cách, mang đến cho bạn trải nghiệm mua sắm thú vị.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
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

export default LatestCollection
