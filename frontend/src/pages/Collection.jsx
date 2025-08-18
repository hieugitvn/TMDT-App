import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(a => a !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = async () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Bộ lọc */}
      <div className='min-w-60'>
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className='my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-700 font-semibold'
        >
          Bộ lọc
          <img 
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`} 
            src={assets.dropdown_icon} 
            alt="" 
          />
        </p>

        {/* Lọc theo danh mục */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-lg shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>Danh mục</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Men"} onChange={toggleCategory} type="checkbox" /> Nam
            </p>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Women"} onChange={toggleCategory} type="checkbox" /> Nữ
            </p>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Kids"} onChange={toggleCategory} type="checkbox" /> Trẻ em
            </p>
          </div>
        </div>

        {/* Lọc theo loại sản phẩm */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-lg shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>Loại sản phẩm</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Topwear"} onChange={toggleSubCategory} type="checkbox" /> Áo
            </p>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Bottomwear"} onChange={toggleSubCategory} type="checkbox" /> Quần
            </p>
            <p className='flex gap-2'>
              <input className='w-3 accent-gray-600' value={"Winterwear"} onChange={toggleSubCategory} type="checkbox" /> Đồ mùa đông
            </p>
          </div>
        </div>
      </div>

      {/* Khu vực sản phẩm */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"TẤT CẢ"} text2={"SẢN PHẨM"} />

          {/* Sắp xếp */}
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            className='border-2 border-gray-300 text-sm px-2 rounded-md cursor-pointer'
          >
            <option value="relavent">Sắp xếp: Liên quan</option>
            <option value="low-high">Sắp xếp: Giá thấp đến cao</option>
            <option value="high-low">Sắp xếp: Giá cao đến thấp</option>
          </select>
        </div>

        {/* Hiển thị danh sách sản phẩm */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
