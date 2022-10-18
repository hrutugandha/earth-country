/* eslint-disable jsx-a11y/alt-text */
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../Utils/Earth-county-Website-slider-01-_1_-2-scaled.webp'
import image2 from '../../Utils/Earth-county-Website-slider-02-_1_-2-scaled.webp'


const Slideshow = () => {

  
  
const slideImages = [
  {
    url: image1,
    caption: 'Slide 1'
  },
  {
    url: image2,
    caption: 'Slide 2'
  }
];

  return (
      <Slide>
         {slideImages.map((slideImage, index)=> (
              <SlideDiv key={index}>
                <Image width="100%" src={`${slideImage.url}`} />
                <Button margin="0px" transform= "translate(-50%, -50%)" position= "sticky" h="56px" w={"160px"}  marginLeft={"1000px"} marginTop="-140px" marginBottom={"0px"} colorScheme="green">Know More</Button>
              </SlideDiv>
          ))} 
        </Slide>
  )
}

const SlideDiv = styled.div`
     width: 100%;
     margin: 0px;
     height: 100%;
     background-color: black
`

export default Slideshow

