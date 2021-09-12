import styled from "styled-components";
import { IoRocketOutline } from "react-icons/io5";
import { FcBusinesswoman } from "react-icons/fc";

export const AboutSection = styled.section`
  margin: 5rem 0 2rem;
  width: 100%;
`;
export const AboutContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
export const Heading = styled.h1`
  font-size: 2.1rem;
  font-weight: 500;
  color: #777;
  text-align: center;
  padding: 2.5rem 0;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const AboutWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const LeftSide = styled.div`
  flex-basis: 35%;
`;
export const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  border-radius: 5px;
  border: none;
  box-shadow: 3px 5px 20px 0px rgba(83, 87, 249, 0.43);
`;
export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 5px;
  border: none;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: -120px;
  border: none;
  border-radius: 5px;
  width: 250px;
  background: linear-gradient(
    45deg,
    hsla(249, 86%, 53%, 0.75) 0%,
    hsla(306, 100%, 46%, 0.7) 100%,
    hsla(319, 72%, 75%, 0.6) 100%
  );
  @media screen and (max-width: 768px) {
    right: 0px;
  }
`;

export const OverlayContent = styled.p`
  color: #f7f7f7;
  font-size: 1.05rem;
  font-weight: 500;
  padding: 3rem 1.2rem;
  text-align: center;
  line-height: 1.75;
  text-transform: capitalize;
`;
export const RightSide = styled.div`
  flex-basis: 45%;
`;
export const RightSideContent = styled.div`
  width: 100%;
`;
export const RightSideTitle = styled.h3`
  font-size: 2.75rem;
  font-weight: 500;
  color: #444;
  padding: 1.5rem 0;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const RightSideSubtitle = styled.p`
  font-size: 1.03rem;
  font-weight: 500;
  color: #777;
  padding-bottom: 1.8rem;
  line-height: 1.6;
`;
export const AboutFeatured = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Featured = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;
export const FeaturedOneIcon = styled(IoRocketOutline)`
  font-size: 2.5rem;
  color: #4635ff;
`;
export const FeaturedTwoIcon = styled(FcBusinesswoman)`
  font-size: 2.5rem;
`;
export const FeaturedContent = styled.div`
  margin-left: 10px;
`;
export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const Subtitle = styled.p`
  color: #777;
  font-size: 1.02rem;
  font-weight: 500;
`;

export const AboutBtn = styled.div`
  padding: 2.5rem 0;
`;
