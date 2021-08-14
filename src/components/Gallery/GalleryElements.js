import styled, { css } from "styled-components/macro";

export const GallerySection = styled.section`
  margin: 5rem 0 2rem;
`;
export const GalleryContainer = styled.div`
  width: 100%;
`;
export const HeadLine = styled.h1`
  padding: 1.2rem 0;
  text-align: center;
  font-size: 2.16rem;
  font-weight: 500;
  color: #666;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const GalleryWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 2rem 1.2rem;
  margin-bottom: 30px;

  @media screen and (max-width:768px){
    grid-template-columns: 1fr;
    align-items: center;
  }
`;
export const ImageItem = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  border-radius: 10px;

  h1 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 3.5rem;
    text-align: center;
    font-weight: 400;
    color: #f7f7f7;
    opacity: 0;
    z-index: 10;
    transition: all .95s ease-in-out;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0%;
    left: 0;
    opacity: 0;
    background: linear-gradient(
      45deg,
      hsla(249, 86%, 53%, 0.7) 0%,
      hsla(306, 100%, 46%, 0.65) 100%,
      hsla(319, 72%, 75%, 0.5) 100%
    );
    transition: all 1s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    top: 0;
  }

  &:hover h1{
    opacity: 1;
    bottom: 50%;
  }
`;

const Image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const Img = styled.img`
  ${Image}
  border-radius: 5px;
`;
export const ImgDiv = styled.img`
  ${Image}
  border-radius: 5px;
`;
