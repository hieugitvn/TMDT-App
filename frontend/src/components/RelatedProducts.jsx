import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {

    const [related, setRelated] = useState([])

    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter(item => category === item.category);
            productsCopy = productsCopy.filter(item => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory])

    return (
        <div className='my-24'>
            {/* Tiêu đề */}
            <div className='text-center text-3xl py-2'>
                <Title text1={"SẢN PHẨM"} text2={"LIÊN QUAN"} />
            </div>

            {/* Danh sách sản phẩm */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8 px-3'>
                {
                    related.map((item, index) => (
                        <div 
                            key={index} 
                            className="p-2 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white"
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

export default RelatedProducts
