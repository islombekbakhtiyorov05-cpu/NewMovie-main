import React from 'react'
import Navbar from '../Components/Main/Navbar'
import Header from '../Components/Home/Header'
import Slider from '../Components/Main/Slider'
import Devices from '../Components/Home/Devices'
import Questions from '../Components/Main/Questions'
import Plan from '../Components/Main/Plan'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'

const Home = () => {
  return (
    <div >
        <Navbar/>
        <Header/>
        <Slider url={"movie/popular"} title={"Explore variety of categories"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
        <Devices/>
        <Questions/>
        <Plan/>
        <Banner/>
        <Footer/>
      
    </div>
  )
}

export default Home