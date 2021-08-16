import React from "react";
import { 
    AboutSection,
    AboutContainer,
    Heading,
    AboutWrapper,
    LeftSide,
    AboutImage,
    ImageItem,
    ImageOverlay,
    OverlayContent,
    RightSide,
    RightSideContent,
    RightSideTitle,
    RightSideSubtitle,
    AboutFeatured,
    FeaturedOneIcon,
    FeaturedContent,
    Title,
    Subtitle,
    Featured,
    FeaturedTwoIcon,
    AboutBtn
} from "./AboutElements"

import Image from "../../assets/images/teach-1.jpg"
import { Button } from "../../helpers/Buttons/Buttons";

const About = () => {
  return (
    <>
      <AboutSection id="about">
        <AboutContainer>
          <Heading>
            About Our <span>Programmes</span>
          </Heading>
          <AboutWrapper>
            <LeftSide>
              <AboutImage>
                <ImageItem src={Image} alt="" />
                <ImageOverlay>
                  <OverlayContent>
                    Already we have +7000 students & 400 skilled Instructors
                  </OverlayContent>
                </ImageOverlay>
              </AboutImage>
            </LeftSide>
            <RightSide>
              <RightSideContent>
                <RightSideTitle>
                  We're Here to help your Modern <span>Education</span>
                </RightSideTitle>
                <RightSideSubtitle>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur eius optio, assumenda eum exercitationem quaerat.
                </RightSideSubtitle>
                <AboutFeatured>
                  <Featured>
                    <FeaturedOneIcon />
                    <FeaturedContent>
                      <Title>Top Rated</Title>
                      <Subtitle>Educational Programme</Subtitle>
                    </FeaturedContent>
                  </Featured>

                  <Featured>
                    <FeaturedTwoIcon />
                    <FeaturedContent>
                      <Title>Top Happy Students</Title>
                      <Subtitle>5K+ Happy Students</Subtitle>
                    </FeaturedContent>
                  </Featured>
                </AboutFeatured>
                <AboutBtn>
                  <Button primary wide>
                    Explore More
                  </Button>
                </AboutBtn>
              </RightSideContent>
            </RightSide>
          </AboutWrapper>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default About;
