import React, { useContext, useEffect, useState, useRef } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])
    const [bestSellerProducts, setBestSellerProducts] = useState([])
    const [currentLatestIndex, setCurrentLatestIndex] = useState(0)
    const [currentBestIndex, setCurrentBestIndex] = useState(0)
    const navigate = useNavigate()
    const intervalRef = useRef(null)

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10))
            const bestProducts = products.filter(item => item.bestseller).slice(0, 5)
            setBestSellerProducts(bestProducts)
        }
    }, [products])

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentLatestIndex(prev => (prev + 1) % latestProducts.length)
            setCurrentBestIndex(prev => (prev + 1) % bestSellerProducts.length)
        }, 3000)
        return () => clearInterval(intervalRef.current)
    }, [latestProducts, bestSellerProducts])

    if (latestProducts.length === 0 || bestSellerProducts.length === 0) return null

    const currentLatest = latestProducts[currentLatestIndex]
    const currentBest = bestSellerProducts[currentBestIndex]

    return (
        <div 
            className='flex flex-col sm:flex-row border border-gray-300 rounded-xl overflow-hidden shadow-md relative'
            style={{ backgroundImage: `url(${assets.hero_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='absolute inset-0 bg-black opacity-30'></div>

            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 z-10'>
                <p className='font-medium text-sm md:text-base tracking-wide mb-3 text-white'>SẢN PHẨM MỚI NHẤT</p>
                <div 
                    className='flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform'
                    onClick={() => navigate(`/product/${currentLatest._id}`)}
                >
                    <img 
                        src={currentLatest.image[0]} 
                        alt={currentLatest.name} 
                        className='w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md mb-4 border border-white' 
                    />
                    <p className='text-sm font-medium text-white'>{currentLatest.name}</p>
                    <p className='text-gray-200'>{currentLatest.price} VNĐ</p>
                </div>
            </div>

            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 z-10'>
                <p className='font-medium text-sm md:text-base tracking-wide mb-3 text-white'>SẢN PHẨM BÁN CHẠY</p>
                <div 
                    className='flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform'
                    onClick={() => navigate(`/product/${currentBest._id}`)}
                >
                    <img 
                        src={currentBest.image[0]} 
                        alt={currentBest.name} 
                        className='w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md mb-4 border border-white' 
                    />
                    <p className='text-sm font-medium text-white'>{currentBest.name}</p>
                    <p className='text-gray-200'>{currentBest.price} VNĐ</p>
                </div>
            </div>

        </div>
    )
}

export default Hero
