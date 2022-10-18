/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slider = () => {

  return (
   <Container>
     <Carousel responsive={responsive}>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery6.jpg" />
  </div>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery8.jpg" />
  </div>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery9.jpg" />
  </div>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery10.jpg" />
  </div>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery11.jpg" />
  </div>
  <div>
    <Image src="https://earthcounty.in/wp-content/uploads/2022/06/gallery5.jpg" />
  </div>
</Carousel>
   </Container>
  )
}

const Container = styled.div`
    padding: 2px;
    height: 285px;
    width: 100%;
`


export default Slider