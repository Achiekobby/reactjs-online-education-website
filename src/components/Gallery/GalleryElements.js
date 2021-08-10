import styled, { css } from "styled-components/macro";
import { width, gridArea } from "styled-system";

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
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  padding: 2rem 0;
  margin-bottom: 30px;
`;
export const ImageItem = styled.div`
  ${width};
  ${gridArea};
  height: 600px;
  border-radius: 10px;
`;
export const ImageItemDiv = styled.div`
  width: 280px;
  height: 280px;
  ${gridArea};
  border-radius:5px;
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
