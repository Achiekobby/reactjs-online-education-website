import React from "react";
import { SchoolInfoData } from "../../data/SchoolInfoData";
import { 
    InfoSection,
    InfoContainer,
    HeadLine,
    InfoWrapper,
    InfoCard,
    CardImage,
    CardImg,
    CardProfile,
    CardAuthor,
    CardDate,
    CardTitle,
    CardSubText

 } from "./SchoolInfoElements"
const SchoolInfo = () => {
  return (
    <>
      <InfoSection>
        <InfoContainer>
          <HeadLine>
            Read Our Popular Tips and Tricks from the
            <span> University's Magazine</span>
          </HeadLine>
          <InfoWrapper>
              {SchoolInfoData.map((item, index)=>{
                  return(
                <InfoCard key={index}>
                  <CardImg>
                      <CardImage src={item.image} alt=""/>
                  </CardImg>
                  <CardTitle>{item.title}</CardTitle>
                  <CardProfile>
                      <CardAuthor>By: {item.Author}</CardAuthor>
                      <CardDate>{item.date}</CardDate>
                  </CardProfile>
                  <CardSubText to="/sign-up">Read More</CardSubText>
              </InfoCard>
                  )
              })}
              
          </InfoWrapper>
        </InfoContainer>
      </InfoSection>
    </>
  );
};

export default SchoolInfo;
