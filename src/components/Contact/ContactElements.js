import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactSection = styled.section`
  position: relative;
  margin: 8rem 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: -1;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      hsla(249, 86%, 53%, 0.9) 0%,
      hsla(306, 100%, 46%, 0.85) 100%,
      hsla(319, 72%, 75%, 0.75) 100%
    );
  }
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
`;

export const HeadLine = styled.h1`
font-size: clamp(1rem, 3vw, 2.16rem);
color: #FFF;
font-weight: 400;
text-align: center;
max-width: 75%;
line-height: 1.6;
margin-bottom: 40px;

span{
    font-weight: 600;
}
`;
export const ContactWrapper = styled.div`
max-width: 1300px;
margin: 0 auto;
padding: 40px 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const FormInput = styled.form`
  width: 100%;
  padding: 0.3rem 0.4rem;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: transparent;

  input {
    padding: 1rem 0rem;
    width: 70%;
    background: transparent;
    outline: none;
    border: none;
    color: #fff;
    font-size: clamp(0.85rem, 3vw, 1.05rem);

    &::focus {
      outline: none;
      border: none;
    }

    &::placeholder {
      color: #f4f4f4;
      font-size: clamp(0.85rem, 3vw, 1.05rem);
    }
  }
`;
export const ContactBtn = styled(Link)`
  text-decoration: none;
  color: #4635ff;
  padding: 1rem 2.3rem;
  border: none;
  border-radius: 5px;
  background: #f4f4f4;
  font-weight: 600;
  transition: all 0.5s ease;
  font-size: clamp(0.85rem, 3vw, 1.05rem);

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;
