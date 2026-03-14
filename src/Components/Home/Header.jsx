import React from 'react'

const Header = () => {
    return (
        <div className='w-[100%] h-[100vh] bg-linear-to-b from-[rgba(0,0,0,0.8)] to-[#000000] flex flex-col items-center '>
            <div className='mt-[100px]'>
                <img src="/public/Abstract Design.png" alt="" />
            </div>
            <div className='w-full flex flex-col items-center mt-[100px] px-[220px]'>
                <h1 className='text-[rgba(255,255,255,1)] text-[48px] font-bold'>The Best Streaming Experience</h1>
                <p className='text-[rgba(153,153,153,1)] text-[14px] font-regular text-center leading-[150%] mt-[20px]'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to <br /> watch.</p>
            <button className='bg-red-700 px-[20px] py-[10px] text-white mt-[20px]'><i className="fa-solid fa-play text-white"></i> Start Watching Now</button>
            </div>
        </div>
    )
}

export default Header