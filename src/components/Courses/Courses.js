import React from "react";
import {
  Course,
  CourseContainer,
  CourseWrapper,
  CourseCard,
  CourseIcon,
  CourseTitle,
  NumberOfCourses
} from "./CoursesElements";

import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiVirusLine } from "react-icons/ri";

const Courses = () => {
  return (
    <>
      <Course>
        <CourseContainer>
          <CourseWrapper>
            <CourseCard>
              <CourseIcon color="#C087FB">
                <HiOutlineLightBulb />
              </CourseIcon>
              <CourseTitle>Designing</CourseTitle>
              <NumberOfCourses>30 Courses</NumberOfCourses>
            </CourseCard>

            <CourseCard>
              <CourseIcon color="#F8B3DA">
                <FaMicrophoneAlt />
              </CourseIcon>
              <CourseTitle>Marketing</CourseTitle>
              <NumberOfCourses>11 Courses</NumberOfCourses>
            </CourseCard>

            <CourseCard>
              <CourseIcon color="#7471F6">
                <AiOutlineBarChart />
              </CourseIcon>
              <CourseTitle>Business</CourseTitle>
              <NumberOfCourses>18 Courses</NumberOfCourses>
            </CourseCard>

            <CourseCard>
              <CourseIcon color="#A9E0D5">
                <SiReact />
              </CourseIcon>
              <CourseTitle>Physics</CourseTitle>
              <NumberOfCourses>7 Courses</NumberOfCourses>
            </CourseCard>

            <CourseCard>
              <CourseIcon color="#FCB2A8">
                <FaLaptopCode />
              </CourseIcon>
              <CourseTitle>Programming</CourseTitle>
              <NumberOfCourses>30 Courses</NumberOfCourses>
            </CourseCard>

            <CourseCard>
              <CourseIcon color="#86D4F5">
                <RiVirusLine />
              </CourseIcon>
              <CourseTitle>Biology</CourseTitle>
              <NumberOfCourses>8 Courses</NumberOfCourses>
            </CourseCard>
          </CourseWrapper>
        </CourseContainer>
      </Course>
    </>
  );
};

export default Courses;
