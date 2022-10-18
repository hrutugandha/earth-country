import { Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import img from '../Utils/activities.png'

const Activities = () => {
  return (
    <Container>
        <Image height={"540px"} width="100%" src={img} />
    </Container>
  )
}

const Container = styled.div`
     width: 100%;
     border: 1px solid black;
`

export default Activities