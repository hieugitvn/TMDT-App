import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, showSearch])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 shadow-sm hover:shadow-md transition'>
        <input 
          className='flex-1 outline-none bg-inherit text-sm px-2' 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
          type="text" 
          placeholder='Tìm kiếm sản phẩm...' 
        />
        <img className='w-5 opacity-70' src={assets.search_icon} alt="Tìm kiếm" />
      </div>
      <img 
        onClick={() => setShowSearch(false)} 
        className='inline w-4 cursor-pointer ml-2 opacity-60 hover:opacity-100 transition' 
        src={assets.cross_icon} 
        alt="Đóng" 
      />
    </div>
  ) : null
}

export default SearchBar
