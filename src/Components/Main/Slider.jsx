import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom'





const Slider = () => {
    
//     let Base_Url = "https://api.themoviedb.org/3/trending/movie/week"
//     let Api_Key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkxOTNiNzkzNTBlOTliNGFhNjNkZjRmN2JlYjdmYyIsIm5iZiI6MTc1MjA0OTc0OC45OCwic3ViIjoiNjg2ZTI4NTQ5MmJjYzRiYWRlNmU4Yzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vG6XZs3MsR0-kOOz1FQPxF2Zu0Ddw4rnkw7PCS9D9AI'
// const [data, setdata] = useState([])    

// const GetAPI = async () => {
//     const response = await fetch (Base_Url , {
//         headers:{
//             Authorization: Api_Key
//         }
//     })
//     const datas = await response.json()
// setdata(datas.results)
   
    
// }

// useEffect(() => {
// GetAPI()
// } ,[])



    const data = [
        { id: "1", img: "https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Bullet Train" },
        { id: "2", img: "https://m.media-amazon.com/images/M/MV5BODcyMDA5OGQtNTExYi00OGIwLWIyYWUtNWFlZDg0MTMyYmE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title: "Nice Guys" },
        { id: "3", img: "https://m.media-amazon.com/images/I/71QPnEkXygS._AC_UF894,1000_QL80_.jpg", title: "Fight Club" },
        { id: "4", img: "https://m.media-amazon.com/images/I/71VOi4imL3L._AC_UF1000,1000_QL80_.jpg", title: "Inglorious Basterds" },
        { id: "5", img: "https://www.tallengestore.com/cdn/shop/products/BreakingBad-BryanCranston-WalterWhite-TVShowArtPoster7_f853907b-b6d0-4c5b-ac36-8e8b0b837737.jpg?v=1683604387", title: "Breaking Bad" },
        { id: "6", img: "https://i.ebayimg.com/images/g/VYgAAOSwTzNkMFso/s-l1200.jpg", title: "Django Unchained" }
    ];

    return (
        <div className='px-[20px] md:px-[80px] bg-[#0f0e0e] py-[40px] md:py-[60px] relative'>
            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
                <div className='max-w-[800px]'>
                    <h1 className='text-[22px] md:text-[28px] font-bold text-white'>Explore our wide variety of categories</h1>
                    <p className='text-[12px] md:text-[14px] font-regular text-[rgba(153,153,153,1)] mt-2'>
                        Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                    </p>
                </div>

                <div className='flex gap-3'>
                    <button className='prev-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[8px] hover:bg-[#262626] transition-all'>
                        <ArrowLeft color='white' size={20} />
                    </button>
                    <button className='next-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[8px] hover:bg-[#262626] transition-all'>
                        <ArrowRight color='white' size={20} />
                    </button>
                </div>
            </div>

            <Swiper
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                className="mySwiper mt-[30px] md:mt-[50px]"
            >
                {data.map((item) => (
                    
                    
                    <SwiperSlide key={item.id}>
                        <Link to={'/inside'}>
                        <div className='bg-[#1a1a1a] p-3 md:p-4 rounded-[12px] border border-[#262626]'>
                            <div className='h-[200px] md:h-[350px] overflow-hidden rounded-[8px]'>
                                <img 
                                    className='object-cover w-full h-full hover:scale-105 transition-transform duration-300' 
                                    src={item.img} 
                                    alt={item.title} 
                                />
                            </div>
                            <h1 className='text-[16px] md:text-[20px] mt-[15px] md:mt-[20px] text-white font-medium truncate'>
                                {item.title}
                            </h1>
                        </div></Link>
                    </SwiperSlide>
                    
                ))}
               
                
            </Swiper>
           
            
        </div>
    );
};

export default Slider;