import React from "react";
import { Button } from "../../helpers/Buttons/Buttons";
import HeroImg from "../../assets/images/hero__img.jpg" 
import {
  HeroSection,
  HeroContainer,
  HeroWrapper,
  HeroLeftSide,
  HeroRightSide,
  HeroContent,
  TopLine,
  Heading,
  SubHeading,
  HeroBtn,
  FormContainer,
  FormHeading,
  FormButton,
  FormInput,
  HeroBg,
  ImageBg
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroSection id="home">
        <HeroContainer>
          <HeroBg>
            <ImageBg src={HeroImg} alt="Students Studying"></ImageBg>
          </HeroBg>

          <HeroWrapper>
            <HeroLeftSide>
              <HeroContent>
                <TopLine>Educational Programme</TopLine>
                <Heading>
                  We're Top Rated Educational <span>Institute</span>
                </Heading>
                <SubHeading>
                  Educate yourself from Home, a Coworking Space, or Wherever You
                  Feel Most Inspired and Productive. Start Now.
                </SubHeading>
                <HeroBtn>
                  <Button outline>Explore More</Button>
                </HeroBtn>
              </HeroContent>
            </HeroLeftSide>
            <HeroRightSide>
              <FormContainer>
                <FormHeading>
                  Fill this Form for start process to admission
                </FormHeading>
                <FormInput>
                  <input type="text" name="name" placeholder="Enter Email" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <FormButton>Apply for Admission</FormButton>
                </FormInput>
              </FormContainer>
            </HeroRightSide>
          </HeroWrapper>
        </HeroContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
