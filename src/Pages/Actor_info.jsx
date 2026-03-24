import React from 'react'
import Actor_head from '../Components/Movie/Actor_head'
import Navbar2 from '../Components/Main/Navbar2'
import Slider from '../Components/Main/Slider'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'

const Actor_info = () => {
  return (
    <div>
      <Navbar2/>
      <Actor_head/>
      <Slider/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Actor_info