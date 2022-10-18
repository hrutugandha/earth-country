import { Button, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import leaves from "../Utils/neve-patterns-8.jpg";
import img1 from "../Utils/music.png";
import img2 from "../Utils/binoculars.png";
import img3 from "../Utils/tree.png";

const styles = {
  header: {
    backgroundImage: `url(${leaves})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "50px",
  },
};

const Overview = () => {
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <Wrapper>
          <Heading>
            Event <i>Overview</i>
          </Heading>
          <ContentDiv>
            <Content>
              <Image src={img3} marginLeft="140px" />
              <h2 style={{ fontSize: "28px", marginTop: "20px" }}>
                NATURE’S EMBRACE
              </h2>
              <br />
              <p>
                A natural health retreat crafted to get you closer to yourself
                and to nature
              </p>
            </Content>
            <Content>
              <Image src={img1} marginLeft="140px" />
              <h2 style={{ fontSize: "28px", marginTop: "20px" }}>
                NATURE’S EMBRACE
              </h2>
              <br />
              <p>
                A natural health retreat crafted to get you closer to yourself
                and to nature
              </p>
            </Content>
            <Content>
              <Image src={img2} marginLeft="140px" />
              <h2 style={{ fontSize: "28px", marginTop: "20px" }}>
                NATURE’S EMBRACE
              </h2>
              <br />
              <p>
                A natural health retreat crafted to get you closer to yourself
                and to nature
              </p>
            </Content>
          </ContentDiv>
          <Button
            marginTop={"50px"}
            colorScheme="green"
            variant="outline"
            background="#fff"
          >
            Book Site Visit
          </Button>
        </Wrapper>
      </div>
    </div>
  );
};

const Content = styled.div`
  text-align: center;
  padding: 10px;
  height: 300px;
  width: 360px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentDiv = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 50px;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  height: 500px;
  width: 1200px;
`;

const Heading = styled.h1`
     font-size: 40px;
     text-align: left;
     margin-bottom: 40px
     color: 'white';
     text-align: center;
`;

export default Overview;
