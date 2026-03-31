import React, { useEffect, useState } from 'react'
import Navbar2 from '../Components/Main/Navbar2'
import Header from '../Components/Movie/Header'
import Casts from '../Components/Movie/Casts'
import Movie_info from '../Components/Movie/Movie_info'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import { useParams } from 'react-router-dom'
import Api_Service from '../Components/Service/Api_Service'
const Movie_inside = () => {


const [Movie , setMovie] = useState()
const [Actor, setActor] = useState()

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

const {id} = useParams();

const getMovie = async () => {
  const responce = await Api_Service .getData(`movie/${id}`)
  const responce2 = await Api_Service.getData(`movie/${id}/credits`)
  
 

  

  setActor(responce2)
 setMovie(responce) 
}

useEffect(() => {
  getMovie()
}, [])
  return (
    <div>
      <Navbar2 />
      <div className='px-[20px] md:px-[80px] bg-[#0d0d0d] py-[10px]'>
        <Header Movie = {Movie} />
      </div>
      <div className='md:flex gap-[20px] px-[20px] md:px-[80px] bg-[#0d0d0d] py-[10px]'>
        <div className=' w-[100%] md:w-[70%]'>
          <Casts Cast = {Actor?.cast} Movie = {Movie} />
        </div>
        <div className='w-[100%] md:w-[30%] mt-[20px] md:mt-[0px]'>
          <Movie_info Genres = {Movie?.genres} Languages = {Movie?.spoken_languages} Crew = {Actor?.crew} Movie = {Movie} />
        </div>
      </div>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Movie_inside