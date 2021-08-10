import React from "react";
import {
  FeatureSection,
  FeatureContainer,
  TopLine,
  HeadLine,
  FeatureWrapper,
  FeatureCard,
  CardIconOne,
  CardIconTwo,
  CardIconThree,
  CardIconFour,
  CardContent,
  Title,
  Subtitle,
  FeatureBg,
  ImageBackground,
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
} from "./FeatureElements";

import ImageBg from "../../assets/images/feature-bg.jpg";

const Feature = () => {
  return (
    <>
      <FeatureSection>
        <FeatureBg>
          <ImageBackground src={ImageBg} alt="" />
        </FeatureBg>
        <FeatureContainer>
          <TopLine>Start Your Learning Programme</TopLine>
          <HeadLine>University of Siksha</HeadLine>
          <FeatureWrapper>
            <FeatureCard>
              <IconOne>
                <CardIconOne />
              </IconOne>
              <CardContent>
                <Title>Scholarship Facility</Title>
                <Subtitle>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus, ullam?
                </Subtitle>
              </CardContent>
            </FeatureCard>
            <FeatureCard>
              <IconTwo>
                <CardIconTwo />
              </IconTwo>
              <CardContent>
                <Title>Skilled Teaching</Title>
                <Subtitle>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus, ullam? Necessitatibus,
                </Subtitle>
              </CardContent>
            </FeatureCard>
            <FeatureCard>
              <IconThree>
                <CardIconThree />
              </IconThree>
              <CardContent>
                <Title>Latest Books</Title>
                <Subtitle>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus, ullam? Necessitatibus,
                </Subtitle>
              </CardContent>
            </FeatureCard>
            <FeatureCard>
              <IconFour>
                <CardIconFour />
              </IconFour>
              <CardContent>
                <Title>Workout Gym</Title>
                <Subtitle>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus, ullam?
                </Subtitle>
              </CardContent>
            </FeatureCard>
          </FeatureWrapper>
        </FeatureContainer>
      </FeatureSection>
    </>
  );
};

export default Feature;
