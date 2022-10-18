import React from "react";
import "./navbar.module.css";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";
import facebook from '../../Utils/icons8-facebook-30.png'
import instagram from '../../Utils/icons8-instagram-30.png'
import linkedin from '../../Utils/icons8-linkedin-circled-30.png'


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image
            fallbackSrc="https://via.placeholder.com/150"
            height={"100%"}
            marginLeft={"5rem"}
            borderRadius={"0"}
            width={"-moz-fit-content"}
            src="https://earthcounty.in/wp-content/uploads/2022/06/logo.jpg"
          />
        </Logo>
        <Infodiv>
          <Numdiv>
            <Image
              fallbackSrc="https://via.placeholder.com/60"
              height={"55px"}
              borderRadius={"50px"}
              color={"#fff"}
              backgroundColor={"#fff"}
              src="https://img.icons8.com/external-others-inmotus-design/344/external-Phone-game-play-others-inmotus-design-2.png"
            />
            <h1 style={{ marginTop: "10px", fontSize: "20px", color: "#fff" ,marginLeft:"10px"}}>
              +91 8956 089 455
            </h1>
          </Numdiv>
          <Icondiv>
          <Image
              fallbackSrc="https://via.placeholder.com/60"
              backgroundColor={"#fff"}
              src={facebook}
              maxHeight={"30px"}
              maxWidth={"30px"}
              borderRadius={"15px"}
              marginTop="10px"
            />
            <Image
              fallbackSrc="https://via.placeholder.com/60"
              backgroundColor={"#fff"}
              src={instagram}
              maxHeight={"30px"}
              maxWidth={"30px"}
              borderRadius={"15px"}
              marginTop="10px"
            />
            <Image
              fallbackSrc="https://via.placeholder.com/60"
              backgroundColor={"#fff"}
              src={linkedin}
              maxHeight={"30px"}
              maxWidth={"30px"}
              borderRadius={"15px"}
              marginTop="10px"
            />
          </Icondiv>
        </Infodiv>
      </Wrapper>
    </Container>
  );
};

const Icondiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
`;
const Numdiv = styled.div`
  max-width: 52%;
  display: flex;
  justify-content: space-between;
`;

const Infodiv = styled.div`
  height: 50%;
  width: 30%;
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 120px;
  width: 100%;
  position: sticky;
  background-color: #474747;
`;
const Wrapper = styled.div`
  width: 96%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  height: 100%;
  width: 20%;
  overflow: visible;
`;

export default Navbar;
