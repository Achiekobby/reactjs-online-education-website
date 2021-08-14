import styled from "styled-components"
import { color } from "styled-system"

export const Course = styled.section`
margin-bottom: 50px;

`
export const CourseContainer = styled.div`
  width: 100%;
  margin-top: -35px;
`;
export const CourseWrapper = styled.div`
max-width: 1300px;
padding: 0 20px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;

@media screen and (max-width:768px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`
export const CourseCard = styled.div`
  z-index: 10;
  width: 170px;
  padding: 1.6rem 0.6rem;
  border: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: 4px 8px 13px -7px rgba(237, 144, 207, 0.75);
  margin-right: 20px;

  @media screen and (max-width:768px){
    margin-bottom: 30px;
  }
`;
export const CourseIcon = styled.i`
${color}
font-size: 2rem;
margin: 60px 0;

`
export const CourseTitle = styled.h3`
color: #777;
font-weight: 600;
margin-top: 10px;
margin-bottom: 5px;
`
export const NumberOfCourses = styled.p`
font-size: 1.05rem;
font-weight: 500;
color: #999;
`



