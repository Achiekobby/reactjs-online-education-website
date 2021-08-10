import React from "react";
import {
    FooterSection,
    FooterContainer,
    FooterWrapper,
    Company,
    CompanyName,
    CompanyDesc,
    CompanySocial,
    Facebook,
    Instagram,
    Twitter,
    Behance,
    FooterList,
    FooterCourseTitle,
    FooterCourseItems,
    CourseItem,
    FooterInterests,
    InterestText,
    FooterCopyright

} from "./FooterElements"
const Footer = () => {

  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterWrapper>
            <Company>
              <CompanyName>SHIKSA</CompanyName>
              <CompanyDesc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ut reprehenderit ipsam temporibus, laboriosam maxime!
              </CompanyDesc>
              <CompanySocial>
                <Facebook />
                <Twitter />
                <Instagram />
                <Behance />
              </CompanySocial>
            </Company>

            <FooterList>
              <FooterCourseTitle>Courses</FooterCourseTitle>
              <FooterCourseItems>
                <CourseItem>Business</CourseItem>
                <CourseItem>Finance</CourseItem>
                <CourseItem>Marketing</CourseItem>
                <CourseItem>Web</CourseItem>
                <CourseItem>Graphic</CourseItem>
              </FooterCourseItems>
            </FooterList>

            <FooterList>
              <FooterCourseTitle>Web</FooterCourseTitle>
              <FooterCourseItems>
                <CourseItem>Book & Support</CourseItem>
                <CourseItem>NoticeBoard</CourseItem>
                <CourseItem>Terms & Conditions</CourseItem>
                <CourseItem>About Us</CourseItem>
                <CourseItem>Admission</CourseItem>
              </FooterCourseItems>
            </FooterList>

            <FooterList>
              <FooterCourseTitle>Information</FooterCourseTitle>
              <FooterCourseItems>
                <CourseItem>Why Shiksa</CourseItem>
                <CourseItem>Privacy Policy</CourseItem>
                <CourseItem>Scholarship News</CourseItem>
                <CourseItem>Class Timetable</CourseItem>
                <CourseItem>Exam & Results</CourseItem>
              </FooterCourseItems>
            </FooterList>

            <FooterList>
              <FooterCourseTitle>Contact Us</FooterCourseTitle>
              <FooterCourseItems>
                <CourseItem>Address:</CourseItem>
                <CourseItem>01 Shiksa avenue</CourseItem>
                <CourseItem>Phone & Email:</CourseItem>
                <CourseItem>233-557-700-916</CourseItem>
                <CourseItem>achie@e-mail.com</CourseItem>
              </FooterCourseItems>
            </FooterList>
          </FooterWrapper>
          <FooterInterests>
            <InterestText>Scholarship</InterestText>
            <InterestText>Become a Student</InterestText>
            <InterestText>Courses</InterestText>
            <InterestText>Become a Teacher</InterestText>
            <InterestText>Course Outline</InterestText>
          </FooterInterests>
          <FooterCopyright>
              &copy;Copyright, 2021, by achiekobby
          </FooterCopyright>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

export default Footer;
