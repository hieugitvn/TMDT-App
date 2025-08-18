import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      {/* Tiêu đề chính */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'VỀ'} text2={'CHÚNG TÔI'} />
      </div>

      {/* Giới thiệu */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Giới thiệu Forever" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Cửa hàng được thành lập từ niềm đam mê đổi mới và mong muốn cách mạng hóa trải nghiệm mua sắm trực tuyến. 
            Hành trình của chúng tôi bắt đầu với một ý tưởng đơn giản: tạo ra nền tảng nơi khách hàng có thể dễ dàng khám phá, 
            lựa chọn và mua sắm đa dạng sản phẩm ngay tại nhà.
          </p>
          <p>
            Từ khi ra đời, chúng tôi không ngừng nỗ lực để tuyển chọn những sản phẩm chất lượng cao, 
            đáp ứng mọi phong cách và nhu cầu. Từ thời trang, làm đẹp cho đến điện tử và đồ dùng gia đình, 
            cửa hàng mang đến bộ sưu tập phong phú từ những thương hiệu và nhà cung cấp uy tín.
          </p>
          <b className='text-gray-800'>Sứ Mệnh Của Chúng Tôi</b>
          <p>
            Sứ mệnh của cửa hàng là trao quyền cho khách hàng với sự lựa chọn đa dạng, tiện lợi và an tâm. 
            Chúng tôi cam kết mang đến trải nghiệm mua sắm mượt mà và vượt mong đợi — từ khâu duyệt sản phẩm, 
            đặt hàng cho đến giao nhận và dịch vụ hậu mãi.
          </p>
        </div>
      </div>

      {/* Tại sao chọn chúng tôi */}
      <div className='text-xl py-4'>
        <Title text1={'TẠI SAO'} text2={'CHỌN CHÚNG TÔI'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Cam Kết Chất Lượng</b>
          <p className='text-gray-600'>
            Mỗi sản phẩm đều được chọn lọc và kiểm định kỹ lưỡng để đáp ứng các tiêu chuẩn chất lượng nghiêm ngặt.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Tiện Lợi</b>
          <p className='text-gray-600'>
            Với giao diện thân thiện và quy trình đặt hàng nhanh gọn, việc mua sắm chưa bao giờ dễ dàng đến thế.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Dịch Vụ Khách Hàng Tận Tâm</b>
          <p className='text-gray-600'>
            Đội ngũ chuyên nghiệp và tận tình luôn sẵn sàng hỗ trợ bạn, đảm bảo sự hài lòng của khách hàng là ưu tiên hàng đầu.
          </p>
        </div>
      </div>

      {/* Hộp đăng ký nhận tin */}
      <NewsletterBox />

    </div>
  )
}

export default About
