import { Image, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const styles = {
  header: {
    backgroundImage: `url(${"https://as2.ftcdn.net/v2/jpg/04/03/16/85/1000_F_403168593_onkCGxYrKFlfD91ZJCYGzSZX4N23Fprt.jpg"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    textAlign: "center",
  },
  content: {
    height: "100%",
    width: "100%",
    padding: "50px",
  },
};

const InnerPeace = () => {
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <Heading>
          Find <i>Inner Peace</i> in this Piece of <i>Land</i>
        </Heading>
        <Wrapper>
          <Info>
            <InfoHeading>Security</InfoHeading>
            <Text>
              Throughout the utterly transparent procedure, we encourage your
              active involvement to assure the utmost security of your
              investment. The 102 acres of Earth County are approved by
              MahaRERA, adding extra security to your investment.
            </Text>
          </Info>
          <ImageDiv>
            <Image
              fit={"cover"}
              height="100%"
              src="https://earthcounty.in/wp-content/uploads/2022/06/5-1-1.jpg"
            />
          </ImageDiv>
        </Wrapper>
        <Wrapper>
          <ImageDiv>
            <Image
              fit={"cover"}
              height="100%"
              src="https://earthcounty.in/wp-content/uploads/2022/06/6.jpg"
            />
          </ImageDiv>
          <Info textAlign="right">
            <InfoHeading>Prosperity</InfoHeading>
            <Text>
              Each aspect of Earth County is thoughtfully designed to attract
              and deliver exponential ROIs. From the location to the amenities
              that complete this 102-acre gated community, Earth County truly is
              a haven for profitable investments and comfortable lifestyles.{" "}
            </Text>
          </Info>
        </Wrapper>
        <Wrapper>
          <Info>
            <InfoHeading>Integrity</InfoHeading>
            <Text>
              Every member of our proficient team shares the same vision and has
              the same values embedded in their minds. By following our core
              principles, we prioritize the satisfaction of our customers and
              deliver ideal investment and lifestyle options.{" "}
            </Text>
          </Info>
          <ImageDiv>
            <Image
              fit={"cover"}
              height="100%"
              src="https://earthcounty.in/wp-content/uploads/2022/06/7.jpg"
            />
          </ImageDiv>
        </Wrapper>
        <Wrapper>
          <ImageDiv>
            <Image
              fit={"cover"}
              height="100%"
              src="https://earthcounty.in/wp-content/uploads/2022/06/9.jpg"
            />
          </ImageDiv>
          <Info>
            <InfoHeading>Quality</InfoHeading>
            <Text>
              The state-of-the-art development materials and equipment that have
              shaped the systematically developed plots of Earth County set an
              unparalleled benchmark for quality investment options.{" "}
            </Text>
          </Info>
        </Wrapper>
      </div>
    </div>
  );
};

const InfoHeading = styled.h1`
  font-size: 30px;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height: 340px;
`;

const Info = styled.div`
  flex: 1;
  text-align: left;
`;
const ImageDiv = styled.div`
  flex: 1;
`;

export default InnerPeace;
