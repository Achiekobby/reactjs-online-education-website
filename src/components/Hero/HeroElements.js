import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
height: inherit;
margin-top: -80px;
width: 100%;
`

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 5rem 0;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      hsla(249, 86%, 53%, 0.95) 0%,
      hsla(306, 100%, 46%, 0.9) 100%,
      hsla(319, 72%, 75%, 0.8) 100%
    );
    z-index: -1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HeroWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  padding: 0 20px;
  padding-top: 50px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroLeftSide = styled.div`
  flex-basis: 60%;
  margin-top: 30px;
  padding: 1.5 1.2rem;

  @media screen and (max-width:768px){
    flex-basis: 50%;
  }
`;

export const HeroContent = styled.div`
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TopLine = styled.p`
  color: #f7f7f7;
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Heading = styled.h1`
  color: #f7f7f7;
  line-height: 1.6;
  font-size: clamp(1rem, 3vw, 2.85rem);
  font-weight: normal;
  margin-bottom: 30px;

  span {
    font-weight: 700;
  }
`;

export const SubHeading = styled.p`
  color: #f7f7f7;
  max-width: 80%;
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 500;
  
  @media screen and (max-width:768px){
    text-align: center;
  }
`;

export const HeroBtn = styled.div`
  margin-top: 60px;
`;

export const HeroRightSide = styled.div`
  padding: 1.5rem 1.2rem;
  flex-basis: 30%;
  border: 2px solid #f7f7f7;
  border-radius: 5px;

`;

export const FormContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (max-width:768px){
    max-width: 400px;
  }
`;

export const FormHeading = styled.h3`
  color: #f7f7f7;
  padding: 1rem 2rem;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const FormInput = styled.form`
  padding: 1rem 2rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 1.22rem 2rem;
    margin-bottom: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &::placeholder {
      color: #777;
      font-weight: 500;
      font-size: 0.85rem;
    }

    &:focus {
      outline: none;
      border: none;
    }
  }
`;

export const FormButton = styled(Link)`
  width: 100%;
  padding: 1rem 0;
  border-radius: 5px;
  color: #4021ee;
  font-weight: 500;
  font-size: 1.02rem;
  text-align: center;
  text-decoration: none;
  background: #f7f7f7;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
