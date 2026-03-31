import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Api_Service from '../Service/Api_Service'

const Header = () => {

const [staticMovies, setStaticMovies] = useState()  

  const getApi = async () => {
    const responce = await Api_Service.getData("trending/movie/week")
    console.log(responce);
    
  }
  useEffect(() => {
    getApi()
  }, [])

    return (
        <div className='w-full min-h-[95vh] bg-linear-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,1)] flex flex-col items-center overflow-hidden pt-[60px]'>
           
            <div className='mt-[60px] md:mt-[60px]'>
                <img 
                    src="/public/Abstract Design.png" 
                    alt="" 
                    className='w-[200px] md:w-auto' 
                />
            </div>

                       <div className='w-full flex flex-col items-center mt-[40px] md:mt-[60px] px-[20px] md:px-[220px]'>
                
               <h1 className='text-white text-[28px] md:text-[48px] font-bold text-center'>
                    The Best Streaming Experience
                </h1>

                <p className='text-[rgba(153,153,153,1)] text-[12px] md:text-[14px] font-regular text-center leading-[150%] mt-[14px] md:mt-[20px] max-w-[600px] md:max-w-none'>
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. 
                    With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. 
                    <span className="hidden md:inline"><br /></span> 
                    You can also create your own watchlists, so you can easily find the content you want to watch.
                </p>

                <button className='bg-red-700 hover:bg-red-800 transition-colors px-[20px] py-[14px] md:py-[10px] text-white mt-[30px] md:mt-[20px] flex items-center gap-2 rounded-lg'>
                    <i className="fa-solid fa-play text-white"></i> 
                    Start Watching Now
                </button>
            </div>
             
        </div>
    )
}

export default Header