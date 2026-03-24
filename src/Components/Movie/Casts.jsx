import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Pagination, Navigation } from 'swiper/modules';

const Casts = () => {

    const actors = [
        {
            id: '1',
            img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1151380190.jpg?crop=1xw:1.0xh;center,top&resize=640:*'
        },
        {
            id: '2',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_oabsA_ezBdRM3HqxjOndQJ0DzPBks_wjw&s'
        },
        {
            id: '3',
            img: 'https://resizing.flixster.com/uZx2Vy7yVomFpxMO9CikPKD6nwI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/219586_v9_bb.jpg'
        },
        {
            id: '4',
            img: 'https://m.media-amazon.com/images/M/MV5BNjc1MDBkMWEtMzNmYy00NjFjLWFmZDktMzRlYThhMGQxZDYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
        },
        {
            id: '5',
            img: 'https://ntvb.tmsimg.com/assets/assets/182558_v9_bb.jpg?w=360&h=480'
        },
        {
            id: '6',
            img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1151380190.jpg?crop=1xw:1.0xh;center,top&resize=640:*'
        },
        {
            id: '7',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_oabsA_ezBdRM3HqxjOndQJ0DzPBks_wjw&s'
        },
        {
            id: '8',
            img: 'https://resizing.flixster.com/uZx2Vy7yVomFpxMO9CikPKD6nwI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/219586_v9_bb.jpg'
        },
        {
            id: '9',
            img: 'https://m.media-amazon.com/images/M/MV5BNjc1MDBkMWEtMzNmYy00NjFjLWFmZDktMzRlYThhMGQxZDYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
        }
    ]

    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='bg-[rgba(26,26,26,1)] p-[40px] rounded-[9px]'>
                <h3 className='text-[16px] text-[rgba(153,153,153,1)] font-medium'>Description</h3>
                <p className='text-[16px] text-white font-medium leading-[150%] mt-[10px]'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
            <div className='bg-[rgba(26,26,26,1)] p-[40px] rounded-[9px]'>
                <div className='md:flex items-center justify-between'>
                    <p className='text-[16px] text-[rgba(153,153,153,1)] font-medium'>Cast</p>
                    <div className='flex gap-3'>
                        <button className='prev-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                            <ArrowLeft color='white' size={20} />
                        </button>
                        <button className='next-btn p-3 border border-[#262626] bg-[#1a1a1a] rounded-[50%] hover:bg-[#262626] transition-all'>
                            <ArrowRight color='white' size={20} />
                        </button>
                    </div>
                </div>
                <Swiper


                    slidesPerView={8}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    className="mySwiper mt-[20px]"
                >
                    {actors.map((actor) => (
                        <SwiperSlide>
                            <Link to={'/actor_info'}>
                            <div className='h-[80px] '>
                                <img className='w-[100%] object-cover h-[100%] rounded-[9px] hover:scale-105 transition-transform duration-300' src={actor.img} alt="" />
                            </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className='bg-[rgba(26,26,26,1)] p-[40px] rounded-[9px]'>
                <div className='flex items-center justify-between'>
                    <p className='text-[16px] text-[rgba(153,153,153,1)] font-medium'>Reviews</p>
                    <button className='bg-[rgba(20,20,20,1)] text-white border-[1px] border-[rgba(38,38,38,1)] p-[12px] rounded-[9px] text-[14px]'>+  Add Your Review</button>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
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
                    <SwiperSlide className='bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] p-[40px] rounded-[9px]'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-[20px] text-white font-medium'>Aniket Roy</h1>
                                <p className='text-[rgba(153,153,153,1)] text-[18px] font-medium'>From India</p>
                            </div>
                            <div className='flex gap-[10px] items-center text-[18px] text-[rgba(153,153,153,1)] py-[6px] px-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] rounded-[51px]'><img src="/public/Container.png" alt="" /> 4.5</div>
                        </div>
                        <p className='text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[20px]'>
                            This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                        </p>
                    </SwiperSlide>
                     <SwiperSlide className='bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] p-[40px] rounded-[9px]'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-[20px] text-white font-medium'>Aniket Roy</h1>
                                <p className='text-[rgba(153,153,153,1)] text-[18px] font-medium'>From India</p>
                            </div>
                            <div className='flex gap-[10px] items-center text-[18px] text-[rgba(153,153,153,1)] py-[6px] px-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] rounded-[51px]'><img src="/public/Container.png" alt="" /> 4.5</div>
                        </div>
                        <p className='text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[20px]'>
                            This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                        </p>
                    </SwiperSlide>
                     <SwiperSlide className='bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] p-[40px] rounded-[9px]'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-[20px] text-white font-medium'>Aniket Roy</h1>
                                <p className='text-[rgba(153,153,153,1)] text-[18px] font-medium'>From India</p>
                            </div>
                            <div className='flex gap-[10px] items-center text-[18px] text-[rgba(153,153,153,1)] py-[6px] px-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] rounded-[51px]'><img src="/public/Container.png" alt="" /> 4.5</div>
                        </div>
                        <p className='text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[20px]'>
                            This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                        </p>
                    </SwiperSlide>
                </Swiper>
                 <div className='flex gap-3 mt-[20px] w-[100%] justify-center'>
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