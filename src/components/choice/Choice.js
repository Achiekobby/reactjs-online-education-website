import React from "react";
import {
  ChoiceSection,
  ChoiceContainer,
  ChoiceWrapper,
  LeftSide,
  RightSide,
  ChoiceImg,
  ImgItem,
  RightSideContent,
  HeadLine,
  Subtitle,
  RightSideFeatured,
  ChoiceFeatures,
  IconTypeOne,
  IconTypeTwo,
  IconTypeThree,
  FeaturedText,
  IconType
} from "./ChoiceElements";
import ChoiceImage from "../../assets/illustrations/choice.JPG";
const Choice = () => {
  return (
    <>
      <ChoiceSection>
        <ChoiceContainer>
          <ChoiceWrapper>
            <LeftSide>
              <ChoiceImg>
                <ImgItem src={ChoiceImage} />
              </ChoiceImg>
            </LeftSide>
            <RightSide>
              <RightSideContent>
                <HeadLine>
                  Here is Some Specialty why you <span>Chose Us</span>
                </HeadLine>
                <Subtitle>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  autem aspernatur impedit harum nemo repellat natus tempore
                  mollitia?
                </Subtitle>
                <RightSideFeatured>
                  <ChoiceFeatures>
                    <IconType>
                      <IconTypeOne />
                    </IconType>
                    <FeaturedText color="#9039FB">
                      Online Programmes
                    </FeaturedText>
                  </ChoiceFeatures>
                  <ChoiceFeatures>
                    <IconType>
                      <IconTypeTwo />
                    </IconType>
                    <FeaturedText color="#F797B7">
                      Educational Programmes
                    </FeaturedText>
                  </ChoiceFeatures>
                  <ChoiceFeatures>
                    <IconType>
                      <IconTypeThree />
                    </IconType>
                    <FeaturedText color="#51B2FC">
                      Scholarship Facility
                    </FeaturedText>
                  </ChoiceFeatures>
                </RightSideFeatured>
              </RightSideContent>
            </RightSide>
          </ChoiceWrapper>
        </ChoiceContainer>
      </ChoiceSection>
    </>
  );
};

export default Choice;
