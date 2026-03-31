import React from 'react'
import Actor_head from '../Components/Movie/Actor_head'
import Navbar2 from '../Components/Main/Navbar2'
import Slider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import { useParams } from 'react-router-dom'

const Actor_info = () => {
    const { id } = useParams()
  return (
    <div>
      <Navbar2/>
      <Actor_head/>
      <Slider title="Filmography" url={`person/${id}/movie_credits`}/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Actor_info