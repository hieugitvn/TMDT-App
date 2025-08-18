import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      onClick={() => window.scrollTo(0, 0)} 
      className='text-gray-700 cursor-pointer group'
    >
      {/* Ảnh sản phẩm */}
      <div className='overflow-hidden rounded-lg shadow-sm'>
        <img 
          className='group-hover:scale-110 transition-transform duration-300 ease-in-out' 
          src={image[0]} 
          alt={name} 
        />
      </div>

      {/* Tên sản phẩm */}
      <p className='pt-3 pb-1 text-sm truncate'>{name}</p>

      {/* Giá */}
      <p className='text-sm font-semibold text-gray-900'>
        {price} {currency}
      </p>
    </Link>
  )
}

export default ProductItem
