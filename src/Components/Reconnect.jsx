import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subImage from '../Utils/sub-event.png'


const Reconnect = () => {
  return (
    <Container>
      <Info>
        <Heading>
          About <i>Reconnect</i>
        </Heading>
        <p>
          In this ever-evolving world, we often unknowingly disconnect from the
          very things that have shaped us into who we are today.
        </p>
        <br />
        <Text>
          Earth County brings you a wonderful opportunity to get in touch with
          your true self and experience connection like never before. It’s time
          to reconnect!
        </Text>
        <br />
        <Link to="/form">
        <Button
          variant="outline"
          marginTop={"10px"}
          marginBottom={"40px"}
          colorScheme="green"
        >
          Book Free Site Visit
        </Button>
        </Link>
        <br />
        <Heading marginTop="40px" marginBottom="0px">
          The <i>Sub-Events</i>
        </Heading>
        <Image h="200px" src={subImage} marginTop="0px" />
      </Info>
      <ImageDiv>
        <Image
          w="100%"
          src="https://earthcounty.in/wp-content/uploads/2022/06/about2-1024x1024.jpg"
          alt=""
        />
      </ImageDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
`;

const ImageDiv = styled.div`
  flex: 1;
`;

const Info = styled.div`
  flex: 1;
  padding: 70px;
`;

const Heading = styled.h1`
  font-size: 40px;
  text-align: left;
  margin-bottom: 40px;
`;

export default Reconnect;
