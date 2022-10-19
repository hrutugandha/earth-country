import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Text fontSize={"14px"} >
            MahaRERA Reg. No. Plots:P52100022935, Website: <Link>https://maharera.mahaonline.gov.in</Link> The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or <br/> warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of <br/> data or profits arising out of, or in connection with, the use of this website.
            </Text>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
     width:100%;
     display: flex;
     height: 280px;
     border: 1px solid black;
     background-color: #2E2E2E;
     color: white;
`

const Wrapper = styled.div`
    width: 70%;
    height: 200px;
    margin: 0 auto;
    margin-top: 40px;
    text-align: left;
`

export default Footer