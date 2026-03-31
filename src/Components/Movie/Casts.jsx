import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Pagination, Navigation } from 'swiper/modules';

const Casts = ({Movie, Cast}) => {

    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='bg-[rgba(26,26,26,1)] p-[20px] md:p-[40px] rounded-[9px]'>
                <h3 className='text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] font-medium'>Description</h3>
                <p className='text-[14px] md:text-[16px] text-white font-medium leading-[150%] mt-[10px]'>{Movie?.overview}</p>
            </div>
            <div className='bg-[rgba(26,26,26,1)] p-[20px] md:p-[40px] rounded-[9px]'>
                <div className='md:flex items-center justify-between'>
                    <p className='text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] font-medium'>Cast</p>
                    <div className='flex gap-3 mt-[10px] md:mt-0'>
                        <button className='prev-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                            <ArrowLeft color='white' size={20} />
                        </button>
                        <button className='next-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                            <ArrowRight color='white' size={20} />
                        </button>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 4, spaceBetween: 10 },
                        768: { slidesPerView: 6, spaceBetween: 20 },
                        1280: { slidesPerView: 8, spaceBetween: 30 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    className="mySwiper mt-[20px]"
                >
                    {Cast && Cast.map((actor) => (
                        <SwiperSlide key={actor.id}>
                            <Link to={`/actor_info/${actor.id}`}>
                                <div className='h-[60px] md:h-[80px]'>
                                    <img className='w-full object-cover h-full rounded-[9px] hover:scale-105 transition-transform duration-300' src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='bg-[rgba(26,26,26,1)] p-[20px] md:p-[40px] rounded-[9px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] font-medium'>Reviews</p>
                    <button className='bg-[rgba(20,20,20,1)] text-white border-[1px] border-[rgba(38,38,38,1)] p-[8px] md:p-[12px] rounded-[9px] text-[12px] md:text-[14px]'>+ Add Your Review</button>
                </div>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                    }}
                    pagination={{
                        el: ".pagin",
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: ".left-btn",
                        nextEl: ".right-btn",
                    }}
                    className="mySwiper mt-[20px]"
                >
                    {[0, 1, 2].map((i) => (
                        <SwiperSlide key={i} className='bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] p-[20px] md:p-[40px] rounded-[9px]'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='text-[16px] md:text-[20px] text-white font-medium'>Aniket Roy</h1>
                                    <p className='text-[rgba(153,153,153,1)] text-[14px] md:text-[18px] font-medium'>From India</p>
                                </div>
                                <div className='flex gap-[10px] items-center text-[14px] md:text-[18px] text-[rgba(153,153,153,1)] py-[6px] px-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] rounded-[51px]'><img src="/public/Container.png" alt="" /> 4.5</div>
                            </div>
                            <p className='text-[14px] md:text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[16px] md:mt-[20px]'>
                                This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it.
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex gap-3 mt-[20px] w-full justify-center'>
                    <button className='left-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                        <ArrowLeft color='white' size={20} />
                    </button>
                    <div className='pagin-container flex gap-2 mt-[20px]'>
                        <div className='pagin w-[12px] h-[3px] bg-red-700'></div>
                        <div className='pagin w-[12px] h-[3px] bg-gray-600'></div>
                        <div className='pagin-active w-[12px] h-[3px] bg-gray-600'></div>
                    </div>
                    <button className='right-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                        <ArrowRight color='white' size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Casts