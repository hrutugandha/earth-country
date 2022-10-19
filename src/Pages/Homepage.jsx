import React from 'react'
import About from '../Components/About'
import Activities from '../Components/Activities'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import InnerPeace from '../Components/InnerPeace'
import Navbar from '../Components/Navbar/Navbar'
import Overview from '../Components/Overview'
import Reconnect from '../Components/Reconnect'
import Slider from '../Components/Slideshow/Slider.jsx'
import Slideshow from '../Components/Slideshow/Slideshow.jsx'
import VideoBg from '../Components/VideoBg'

const Homepage = () => {

  return (

    <>
    <Navbar/>
    <Slideshow/>
    <About/>
    <Slider/>
    <Reconnect/>
    <Overview/>
    <Activities/>
    <VideoBg />
    <InnerPeace/>
    <ContactUs />
    <Footer/>
    </>
  )
}

export default Homepage