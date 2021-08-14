import React from "react";
import { Button } from "../../helpers/Buttons/Buttons";
import ImageItemOne from "../../assets/images/student-1.jpg";
import ImageItemTwo from "../../assets/images/lab.jpg";
import ImageItemThree from "../../assets/images/galleryThree.jpg";

import {
    GallerySection,
    GalleryContainer,
    GalleryWrapper,
    HeadLine,
    GalleryImages,
    Img,
    ImageItem,
    ImageText,
} from "./GalleryElements"

const Gallery = () => {
  return (
    <>
      <GallerySection>
        <GalleryContainer>
          <HeadLine>
            University Facilities <span>Gallery</span>
          </HeadLine>
          <GalleryWrapper>
            <GalleryImages>
              <ImageItem>
                <h1>Library</h1>
                <Img src={ImageItemOne} alt="" />
              </ImageItem>
              <ImageItem>
                <h1>Laboratory</h1>
                <Img src={ImageItemTwo} alt="" />
              </ImageItem>
              <ImageItem>
                <h1>Gym</h1>
                <Img src={ImageItemThree} alt="" />
              </ImageItem>
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
