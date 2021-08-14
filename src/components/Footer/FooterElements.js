import styled from "styled-components"
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa"

export const FooterSection = styled.section`
  margin: 8rem 0 0;
  background: #f9f9f9;
`;
export const FooterContainer = styled.div`
width: 100%;
`
export const FooterWrapper = styled.div`
max-width: 1300px;
padding: 0 20px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(6, .5fr);
gap: 30px;
place-content: center;
border-bottom: 1px solid #0a0a0a;
padding: 3.5rem 1.2rem;

@media screen and (max-width:768px){
  grid-template-columns: 1fr;
}
`
export const Company = styled.div`
grid-area: 1/1/2/3;
max-width: 75%;
padding: 1rem 0;
`
export const CompanyName = styled.h1`
font-size: 2.26rem;
color: #333;
font-weight: 600;
margin-bottom: 10px;
`
export const CompanyDesc = styled.p`
font-weight: 500;
line-height: 1.75;
font-size: .95rem;
color: #666;
margin-bottom: 20px;
`
export const CompanySocial = styled.div`
margin-top: 20px;
`
export const Facebook = styled(FaFacebookF)`
font-size: 1.45rem;
color: #4635ff;
margin-right: 20px;
`
export const Instagram = styled(FaInstagram)`
  font-size: 1.45rem;
  color: #4635ff;
  margin-right: 20px;
`;
export const Twitter = styled(FaTwitter)`
  font-size: 1.45rem;
  color: #4635ff;
  margin-right: 20px;
`;
export const Behance = styled(FaBehance)`
  font-size: 1.45rem;
  color: #4635ff;
  margin-right: 20px;
`;
export const FooterList = styled.div``
export const FooterCourseTitle = styled.h3`
font-size: 1.5rem;
color: #333;
font-weight: 600;
margin-bottom: 20px;
`
export const FooterCourseItems = styled.ul`
list-style: none;
`
export const CourseItem = styled.li`
  margin-bottom: 20px;
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.4s ease;

  &:hover {
    color: #4635ff;
    transition: all 0.4s ease;
  }
`;
export const FooterInterests = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1.35rem 0;

@media screen and (max-width:768px){
  flex-direction: column;
}
`
export const InterestText = styled.h3`
  color: #777;
  margin-right: 20px;
  font-size: 0.95rem;
  font-weight: 500;

  @media screen and (max-width:768px){
    margin-bottom: 20px;
  }

  &:hover {
    color: #4635ff;
    transition: all 0.4s ease;
  }
`;
export const FooterCopyright = styled.p`
display: flex;
align-items: center;
justify-content: center;
font-size: large.85rem;
padding: .3rem 0;
color: #4635ff;
font-weight: 600;
`
