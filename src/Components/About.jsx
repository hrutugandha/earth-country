import { Button, Image, Spacer, Text} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import about from "../Utils/about6-1024x1024.jpg"


const About = () => {
  return (
    <Container>
        <ImageDiv>
        <Image w="100%" src={about} alt="" />
        </ImageDiv>
        <Info>
            <Heading>About <i>Earth County</i></Heading>
            <p>
            Earth County is East Pune’s largest residential NA gated villa-plots community. Spread across 102 acres, this PMRDA-approved project hosts systematically developed villa plots for 1, 2, and 3 BHK homes with excellent amenities. The entire layout is approved by MahaRERA, adding extra security to your investments.
            </p>
            <br/>
            <Text>
            It is strategically placed on the Ashtavinyak Mahamarg, a 4-lane state highway (near Pune-Nagar Highway) that simplifies the commute and reduces the traveling time owing to its seamless connectivity. It is thoughtfully located near Ranjangaon MIDC/Near Ranjangaon Mahaganapati Temple, between Ahmednagar and Nashik Phata, two locales that have an excellent scope of development soon.
            </Text>
            <br/>
            <Text>
            Home to 10000 fruit tree orchards with 3 water bodies and 2 wells having large water capacity inside the project, Earth County is a slice of heaven on Earth.
            </Text>
            <br/>
            <Text>
            Just 45 min drive from Pune Airport, Kharadi Pune.
From all essentials like banks, hospitals, restaurants, schools, and petrol pumps in proximity to the project to Malls and Theatres, Earth County brings you closer to the ideal life!
            </Text>
            <br/>
            <Button variant='outline' marginTop={"10px"} colorScheme="green" >Book Site Visit</Button>
        </Info>
    </Container>
  )
}

const Container = styled.div`
     width:100%;
     display: flex;
     flex-direction: row;
     text-align: left;
`

const ImageDiv = styled.div`
     flex:1;
`

const Info = styled.div`
     flex:1;
     padding: 70px
`

const Heading = styled.h1`
     font-size: 40px;
     text-align: left;
     margin-bottom: 40px

`

export default About