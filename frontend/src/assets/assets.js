import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import vnpay_logo from './vnpay_logo.png'
import momo_logo from './momo_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    vnpay_logo,
    momo_logo,
    cross_icon
}

export const products = [
    {
    _id: "aaaaa",
    name: "Áo Sơ Mi Denim Dài Tay Nam",
    description: "Mẫu áo sơ mi denim dài tay, kết hợp với quần dài màu đen. Ảnh chụp trên nền trắng, làm nổi bật trang phục.",
    price: 500000,
    image: [p_img1],
    category: "Men", 
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1723526400000,
    bestseller: false
},
{
    _id: "aaaab",
    name: "Áo Sơ Mi Dáng Dài Kẻ Sọc Nữ",
    description: "Một áo sơ mi dài tay, dáng dài kẻ sọc màu đen trắng, kết hợp với quần dài màu đen. Tổng thể trang phục đơn giản và thanh lịch, chụp trên nền trắng.",
    price: 540000, 
    image: [p_img2],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1723267200000,
    bestseller: true
},
{
    _id: "aaaac",
    name: "Áo Top Kẻ Sọc Trẻ Em",
    description: "Một chiếc áo top dài tay kẻ sọc ngang màu be và trắng, kết hợp với quần dài đen và giày trắng. Trang phục đơn giản và thoải mái, phù hợp cho trẻ em.",
    price: 350000,
    image: [p_img3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1723872000000,
    bestseller: false
},
{
    _id: "aaaad",
    name: "Áo Sơ Mi Nam Màu Be",
    description: "Một chiếc áo sơ mi dài tay màu be, phối với áo phông xám bên trong và quần kaki màu kem.",
    price: 670000,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XXL"],
    date: 1723180800000,
    bestseller: true
},
{
    _id: "aaaae",
    name: "Áo Sơ Mi Dáng Dài Kẻ Sọc Nữ",
    description: "Một chiếc áo sơ mi dài tay dáng dài kẻ sọc, kết hợp với quần dài đen. Phối đồ đơn giản và thanh lịch.",
    price: 450000,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1723094400000,
    bestseller: true
},
{
    _id: "aaaaf",
    name: "Áo Phông Trẻ Em Dài Tay",
    description: "Một chiếc áo phông trắng dài tay dành cho trẻ em, kết hợp với quần nỉ xám và giày thể thao.",
    price: 210000,
    image: [p_img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1723958400000,
    bestseller: false
},
{
    _id: "aaaag",
    name: "Bộ Đồ Ngủ Kẻ Sọc Nam",
    description: "Một bộ đồ ngủ ngắn tay kẻ sọc gồm áo sơ mi và quần short, phù hợp cho mùa hè.",
    price: 890000,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1723612800000,
    bestseller: true
},
{
    _id: "aaaah",
    name: "Áo Sơ Mi Cổ Tàu Nam",
    description: "Một chiếc áo sơ mi cổ tàu màu xanh navy, kết hợp với quần short tối màu và giày thể thao.",
    price: 760000,
    image: [p_img8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1723785600000,
    bestseller: false
},
{
    _id: "aaaai",
    name: "Áo Sơ Mi Nữ Dáng Suông",
    description: "Một chiếc áo sơ mi dài tay màu xám, dáng suông thoải mái, phối với quần ống rộng màu xanh.",
    price: 340000,
    image: [p_img9],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1723180800000,
    bestseller: true
},
{
    _id: "aaaaj",
    name: "Chân Váy Dài Nữ",
    description: "Một chiếc chân váy dài màu vàng mustard, kết hợp với áo phông xám ngắn tay. Trang phục nhẹ nhàng và nữ tính.",
    price: 590000,
    image: [p_img10],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1723440000000,
    bestseller: false
},
{
    _id: "aaaak",
    name: "Áo Phông Trẻ Em Dài Tay Trắng",
    description: "Một chiếc áo phông trắng dài tay dành cho trẻ em, kết hợp với quần nỉ xám và giày thể thao.",
    price: 280000,
    image: [p_img11],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1723353600000,
    bestseller: false
},
{
    _id: "aaaal",
    name: "Áo Phông Trẻ Em Trắng",
    description: "Một chiếc áo phông trắng dài tay dành cho trẻ em, kết hợp với quần nhung sọc dọc màu nâu đậm.",
    price: 410000,
    image: [p_img12],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1723699200000,
    bestseller: true
}

  

]