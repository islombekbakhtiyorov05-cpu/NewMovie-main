import React from 'react'
import Navbar2 from '../Components/Main/Navbar2'
import Slider from '../Components/Main/Slider'
import Footer from '../Components/Main/Footer'
const Movies = () => {
  return (
    <div>
      <Navbar2/>
      <Slider url={"movie/now_playing"} title={"Now playing"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Slider url={"movie/top_rated"} title={"Top rated movies for you"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Slider url= {"movie/upcoming"} title={"Upcoming movies"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Slider url={"movie/top_rated"} title={"Top movies for you"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
     
      <Footer/>
    </div>
  )
}

export default Movies