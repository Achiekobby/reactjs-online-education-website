import styled, { css } from "styled-components/macro";
import { GiCheckMark } from "react-icons/gi";
import {color} from "styled-system"

export const ChoiceSection = styled.section`
  margin: 5rem 0 0rem;
  height: 95vh;
  background: #fff;
`;
export const ChoiceContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;
export const ChoiceWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftSide = styled.div`
  flex-basis: 55%;
`;
export const ChoiceImg = styled.div`
  width: 100%;
  height: 100%;
`;
export const ImgItem = styled.img`
  width: 100%;
  height: 100%;
`;
export const RightSide = styled.div`
  flex-basis: 40%;
`;
export const RightSideContent = styled.div`
  width: 100%;
`;
export const HeadLine = styled.h1`
  font-size: 2.26rem;
  font-weight: 500;
  color: #333;
  line-height: 1.7;
  max-width: 450px;
  margin-bottom: 30px;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const Subtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
`;
export const RightSideFeatured = styled.div`
  padding: 1.2rem 0;
`;
export const ChoiceFeatures = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 10px;
`;

export const IconType = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
`

export const IconTypeOne = styled(GiCheckMark)`
  background: linear-gradient(45deg, #842bf1, #d2b4fc);
  font-size: 2.1rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  border-radius:5px;
`;
export const IconTypeTwo = styled(GiCheckMark)`
  background: linear-gradient(45deg, #f4668f, #f386dd);
  font-size: 2.1rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  border-radius:5px;
`;
export const IconTypeThree = styled(GiCheckMark)`
  background: linear-gradient(45deg, #389AFD, rgb(105,201,250));
  font-size: 2.1rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  border-radius:5px;
`;
export const FeaturedText = styled.p`
padding: .5rem .8rem;
${color}
font-size: 1.03rem;
font-weight: 500;
`;
