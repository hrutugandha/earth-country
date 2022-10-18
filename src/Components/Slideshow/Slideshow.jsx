/* eslint-disable jsx-a11y/alt-text */
import { Button, StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import styled from './slider.module.css'

const Slideshow = () => {

  return (
    <Container>
      <div id="slideshow" onload="start()">
        <img src="https://placehold.it/500x300" className={Styles.slideshow_img} alt="" />
      </div>
      <Button  h="56px" w={"160px"} marginTop="600px" marginLeft={"800px"} colorScheme="green">Know More</Button>
      </Container>
  )
}

const Container = styled.div`
     border: 1px solid black;
     height: 100vh;
     width: 100%;

`

export default Slideshow

