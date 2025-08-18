import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("")
  const [image, setImage] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>  {/* -------- Dòng sản phẩm ---------- */}

        {/* -------- Hình ảnh sản phẩm ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img key={index} onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} alt="" />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Thông tin sản phẩm ---------- */}
        <div className='flex-1'>

          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{productData.price} {currency}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Chọn size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button key={index} onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>THÊM VÀO GIỎ</button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Sản phẩm 100% chính hãng.</p>
            <p>Hỗ trợ thanh toán khi nhận hàng.</p>
            <p>Chính sách đổi trả dễ dàng trong 7 ngày.</p>
          </div>
        </div>

      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Mô tả</b>
          <p className='border px-5 py-3 text-sm'>Đánh giá (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Website thương mại điện tử là nền tảng trực tuyến giúp mua bán sản phẩm hoặc dịch vụ qua internet. Đây là thị trường ảo cho phép doanh nghiệp và cá nhân giới thiệu sản phẩm, tương tác với khách hàng và thực hiện giao dịch mà không cần cửa hàng vật lý. Website TMĐT được ưa chuộng nhờ tiện lợi, dễ tiếp cận và khả năng tiếp cận toàn cầu.</p>
          <p>Website TMĐT thường hiển thị sản phẩm hoặc dịch vụ kèm mô tả chi tiết, hình ảnh, giá cả và các tùy chọn (ví dụ: kích cỡ, màu sắc). Mỗi sản phẩm thường có trang riêng với thông tin đầy đủ.</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
