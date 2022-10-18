import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slideshow/Slider.jsx'
import Slideshow from '../Components/Slideshow/Slideshow.jsx'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Slideshow/>
    <About/>
    <Slider/>
    </>
  )
}

export default Homepage