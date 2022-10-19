import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const styles = {
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
      
}

const VideoBg = () => {
  return (
    <Container >
      <div>
      <ReactPlayer
        url={"https://earthcounty.in//wp-content//uploads//2022//06//earthcounty.mp4"}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <Box className={styles.overlay}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="#fff">
      <Text>
            Title Goes Here
          </Text>
          <Button color="primary" variant="contained">
            Click Me
          </Button>
      </Box>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 380px;
  border: 1px solid black;
  width: 100%;
  overflow: hidden;
  color="#fff",
  position: 'relative'
`;

export default VideoBg;
