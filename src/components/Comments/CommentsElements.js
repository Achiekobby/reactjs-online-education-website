import styled, {css} from "styled-components/macro";
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"

export const CommentSection = styled.section`
  height: 75vh;
`;
export const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const CommentBanner = styled.div`
  position: relative;
  width: 100%;
  height: 35%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
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
export const CommentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const CommentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CommentProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProfileImg = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: transparent;
  border: dotted #f4f4f4;
  margin-top: -100px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfilePic = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 50%;
  object-fit: cover;
  -o-object-fit: cover;
  border: none;
`;
export const ProfileName = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  padding: 0.85rem 0;
`;
export const ProfileDesc = styled.h3`
  font-size: 1.17rem;
  font-display: 600;
  padding-bottom: 0.56rem;
  color: #4635ff;
`;
export const ProfileRatings = styled.h4``;
export const CommentContentText = styled.p`
  max-width: 800px;
  font-size: 1.03rem;
  color: #777;
  font-weight: 500;
  line-height: 1.7;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
`;
export const CommentSocial = styled.div`
padding: 1rem 1.56rem;
`;
export const Facebook = styled(FaFacebookF)`
font-size:1.06rem;
color:#4635ff;
margin-right:30px;
`;
export const Twitter = styled(FaTwitter)`
font-size:1.06rem;
color:#4635ff;
margin-right:30px;
`;
export const Instagram = styled(FaInstagram)`
font-size:1.06rem;
color:#4635ff;
margin-right:30px;
`;
export const Behance = styled(FaBehance)`
font-size:1.06rem;
color:#4635ff;
margin-right:30px;
`;

const Icon = css`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0.3rem 0.3rem;
  box-shadow: 3px 5px 20px 0px rgba(83, 87, 249, 0.43);
  transition: all .5s ease;
  cursor: pointer;
  &:hover{
      transform: scale(1.05);
  }
`;

export const IconPrev = styled(BiLeftArrowAlt)`
  ${Icon}
  color: #4635FF;
  font-size: 0.85rem;

`;
export const IconNext = styled(BiRightArrowAlt)`
  ${Icon}
  color: #4635FF;
  font-size: 0.85rem;
`;
