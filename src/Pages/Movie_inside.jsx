import React from 'react'
import Navbar2 from '../Components/Main/Navbar2'
import Header from '../Components/Movie/Header'
import Casts from '../Components/Movie/Casts'
import Movie_info from '../Components/Movie/Movie_info'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
const Movie_inside = () => {
  return (
    <div>
      <Navbar2 />
      <div className='px-[80px] bg-[#0d0d0d] py-[10px]'>
        <Header />
      </div>
      <div className='flex gap-[20px] px-[80px] bg-[#0d0d0d] py-[10px]'>
        <div className='w-[70%]'>
          <Casts />
        </div>
        <div className='w-[30%]'>
          <Movie_info />
        </div>
      </div>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Movie_inside