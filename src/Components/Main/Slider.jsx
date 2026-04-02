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
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Api_Service from '../Service/Api_Service';





const Slider = ({title, description, url}) => {
     const [staticMovies, setStaticMovies] = useState()  

    const getApi = async () => {
         if (!url) return
        const responce = await Api_Service.getData(url)
        setStaticMovies(responce.results  ?? responce.cast ?? [])
        
    }
    
    useEffect(() => {
        getApi()
    }, [])

    const navigate = useNavigate()

const handleOpen = (id) => {
    navigate(`/movie/${id}`)
}


   

    return (
        <div className='px-[20px] md:px-[80px] bg-[#0f0e0e] py-[40px] md:py-[60px] relative'>
            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
                <div className='max-w-[800px]'>
                    <h1 className='text-[22px] md:text-[28px] font-bold text-white'>{title}</h1>
                    <p className='text-[12px] md:text-[14px] font-regular text-[rgba(153,153,153,1)] mt-2'>
                        {description}
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
                {staticMovies && staticMovies.map((movie) => (
                    
                    
                    <SwiperSlide key={movie.id} onClick={() => handleOpen(movie.id)}>
                       
                        <div className='bg-[#1a1a1a] p-3 md:p-4 rounded-[12px] border border-[#262626]'>
                            <div className='h-[200px] md:h-[300px] overflow-hidden rounded-[8px]'>
                                <img 
                                    className='object-cover w-full h-full hover:scale-105 transition-transform duration-300' 
                                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} 
                                    alt={movie.title} 
                                />
                            </div>
                            <h1 className='text-[16px] md:text-[20px] mt-[15px] md:mt-[20px] text-white font-medium truncate'>
                                {movie.title}
                            </h1>
                        </div>
                    </SwiperSlide>
                    
                ))}
               
                
            </Swiper>
           
            
        </div>
    );
};

export default Slider;