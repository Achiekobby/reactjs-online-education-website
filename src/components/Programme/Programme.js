import React from "react";

import {
  Programmes,
  ProgrammeContainer,
  Heading,
  ProgrammeWrapper,
  ProgrammeCard,
  CardImage,
  CardStats,
  Lessons,
  LessonsIcon,
  LessonsText,
  Students,
  StudentIcon,
  StudentText,
  Ratings,
  RatingText,
  RatingIcon,
  ProfileContent,
  Profile,
  ProfileImg,
  ProfileName,
  LessonPrice,
  CardTitle,
  Content
} from "./ProgrammeElements";

const Programme = ({ ProgrammeData }) => {
  return (
    <>
      <Programmes>
        <ProgrammeContainer>
          <Heading>
            Our Programme <span>Courses</span>
          </Heading>
          <ProgrammeWrapper>
            {ProgrammeData.map((data,index) => {
              return (
                <ProgrammeCard key={index}>
                  <CardImage src={data.image} />
                  <Content>
                    <CardTitle>{data.title}</CardTitle>

                    <CardStats>
                      <Lessons>
                        <LessonsIcon />
                        <LessonsText>{data.lessons}</LessonsText>
                      </Lessons>
                      <Students>
                        <StudentIcon />
                        <StudentText>{data.students}</StudentText>
                      </Students>
                      <Ratings>
                        <RatingIcon />
                        <RatingText>{data.rating}</RatingText>
                      </Ratings>
                    </CardStats>
                    <ProfileContent>
                      <Profile>
                        <ProfileImg src={data.profilePic} />
                        <ProfileName>{data.profileName}</ProfileName>
                      </Profile>
                      <LessonPrice>{data.price}</LessonPrice>
                    </ProfileContent>
                  </Content>
                </ProgrammeCard>
              );
            })}
          </ProgrammeWrapper>
        </ProgrammeContainer>
      </Programmes>
    </>
  );
};

export default Programme;
