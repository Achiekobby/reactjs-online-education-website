import React from "react";
import { Button } from "../../helpers/Buttons/Buttons";
import ImageItemOne from "../../assets/images/student-1.jpg";
import ImageItemTwo from "../../assets/images/student-2.jpg";
import ImageItemThree from "../../assets/images/student-3.jpg";
import ImageItemFour from "../../assets/images/student-4.jpg";

import {
    GallerySection,
    GalleryContainer,
    GalleryWrapper,
    HeadLine,
    GalleryImages,
    Img,
    ImgDiv,
    ImageItem,
    ImageItemDiv,
} from "./GalleryElements"

const Gallery = () => {
  return (
    <>
      <GallerySection>
        <GalleryContainer>
          <HeadLine>
            University <span>Gallery</span>
          </HeadLine>
          <GalleryWrapper>
            <GalleryImages>
              <ImageItem width="480px" gridArea="1 / 1 / 3 / 2">
                <Img src={ImageItemOne} alt="" />
              </ImageItem>
              <ImageItem width="380px" gridArea="1 / 2 / 3 / 3">
                <Img src={ImageItemTwo} alt="" />
              </ImageItem>
              <ImageItemDiv gridArea="1 / 3 / 2 / 4">
                <ImgDiv src={ImageItemThree} alt="" />
              </ImageItemDiv>
              <ImageItemDiv gridArea="2 / 3 / 3 / 4">
                <ImgDiv src={ImageItemFour} alt="" />
              </ImageItemDiv>
            </GalleryImages>
            <Button primary wide>
              Explore More
            </Button>
          </GalleryWrapper>
        </GalleryContainer>
      </GallerySection>
    </>
  );
};

export default Gallery;
