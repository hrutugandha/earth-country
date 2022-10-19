import { Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'


const ContactUs = () => {
  return (
    <Container>
      <FormContainer>
        <Heading>
          Contact <i>us</i>
          <Stack spacing="5" marginLeft={"200px"} marginTop="60px">
            <FormControl display={"flex"} flexDirection="row" spacing="5">
              <FormLabel>
                Name
              </FormLabel>
              <Input width={"300px"}  type="text" variant="filled" />
            </FormControl>
            <FormControl display={"flex"} flexDirection="row" spacing="5">
              <FormLabel>
                Phone
              </FormLabel>
              <Input width={"300px"}  type="number" variant="filled" />
            </FormControl>
            <FormControl display={"flex"} flexDirection="row" spacing="5">
              <FormLabel>
                Email
              </FormLabel>
              <Input width={"300px"} type="email" variant="filled" />
            </FormControl>
            <Button width={"200px"} colorScheme={"blackAlpha"}>Submit</Button>
          </Stack>

        </Heading>
      </FormContainer>
      <InfoDiv>
        <Heading color='green' >Free <i>Event</i> Registration</Heading>
        <Text fontSize={"30px"} color={"green"}  marginTop={"40px"} marginLeft="40px">
        NA VILLA PLOTS
        </Text>
        <Text fontSize={"30px"} color={"green"} marginLeft="40px"   marginTop={"40px"}>
        STARTING 20.78* LACS ONWARDS
        </Text>
      </InfoDiv>
    </Container>
  )
}


const Container = styled.div`
     width:100%;
     display: flex;
     height: 400px;
`

const FormContainer = styled.div`
    flex: 1;
    background-color: #329542;
`

const InfoDiv = styled.div`
    flex: 1;
    background-color: #F3F9F4;
    padding: 50px 0px 50px 0px;
    text-align: left;
`

const Heading = styled.h1`
     font-size: 40px;
     text-align: center;
`;

export default ContactUs