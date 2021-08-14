import styled, {css} from "styled-components/macro";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi"
import { BiBookOpen } from "react-icons/bi"
import { CgGym } from "react-icons/cg";

export const FeatureSection = styled.section`
margin: 8rem 0 2rem;
position: relative;
width: 100%;
`;
export const FeatureBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      hsla(249, 86%, 53%, 0.9) 0%,
      hsla(306, 100%, 46%, 0.85) 100%,
      hsla(319, 72%, 75%, 0.75) 100%
    );
  }
`;
export const ImageBackground = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
-o-object-fit: cover;
`
export const FeatureContainer = styled.div`
padding: 5rem 0;
height: 100%;
;
`;
export const TopLine = styled.h1`
font-size: 2.3rem;
color: #f7f7f7;
font-weight: 400;
text-align: center;
padding: .8rem 0;
`;
export const HeadLine = styled.h2`
font-size: 2.3rem;
color: #F7F7F7;
text-align: center;
font-weight: 400;
`;
export const FeatureWrapper = styled.div`
max-width: 1300px;
padding: 40px 20px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-content: center;
gap: 40px;
height: 100%;

@media screen and (max-width:768px){
  grid-template-columns: 1fr;
}
`;
export const FeatureCard = styled.div`
background: #fff;
border: none;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
padding: .3rem .8rem;
`;
export const CardIconOne = styled(FaUserGraduate)`
  border-radius: 50%;
  font-size: 2rem;
  color: #fff;
 
`;
export const Icon = css`
  margin: 40px 20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;    
`;

export const IconOne = styled.div`
${Icon};
background: linear-gradient(45deg, #842bf1, #d2b4fc);
`
export const IconTwo = styled.div`
${Icon};
background: linear-gradient(45deg, #F4668F, #F386DD);
`

export const IconThree = styled.div`
${Icon};
background: linear-gradient(45deg, #4449F6, #929DFA);
`

export const IconFour = styled.div`
${Icon};
background: linear-gradient(45deg, #389AFD, rgb(105,201,250));
`

export const CardIconTwo = styled(GiTeacher)`
  border-radius: 50%;
  font-size: 2rem;
  color: #FFF;
`;
export const CardIconThree = styled(BiBookOpen)`
  border-radius: 50%;
  font-size: 2rem;
  color: #FFF;
`;
export const CardIconFour = styled(CgGym)`
  border-radius: 50%;
  font-size: 2rem;
  color: #FFF;
`;
export const CardContent = styled.div`
`;
export const Title = styled.div`
font-weight: 600;
font-size: 1.15rem;
margin-bottom: 10px;
`;
export const Subtitle = styled.div`
font-size: .96rem;
font-weight: 500;
color: #666;
line-height: 1.7;
margin-bottom: 0px;
`;
