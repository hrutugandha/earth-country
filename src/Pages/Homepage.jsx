import React from 'react'
import About from '../Components/About'
import Activities from '../Components/Activities'
import Navbar from '../Components/Navbar/Navbar'
import Overview from '../Components/Overview'
import Reconnect from '../Components/Reconnect'
import Slider from '../Components/Slideshow/Slider.jsx'
import Slideshow from '../Components/Slideshow/Slideshow.jsx'

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
    </>
  )
}

export default Homepage