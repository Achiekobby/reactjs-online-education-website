import React from "react";

import {
  CommentSection,
  CommentContainer,
  CommentBanner,
  CommentImg,
  CommentWrapper,
  CommentContent,
  CommentProfile,
  ProfileImg,
  ProfilePic,
  ProfileName,
  ProfileDesc,
  ProfileRatings,
  CommentContentText,
  CommentSocial,
  Behance,
  Facebook,
  Twitter,
  Instagram,
  IconNext,
  IconPrev
} from "./CommentsElements";
import ImageItem from "../../assets/images/comment-bg.jpg"
import ImageItemTwo from "../../assets/images/profilepic2.jpg"

const Comments = () => {
  return (
    <>
      <CommentSection>
        <CommentContainer>
          <CommentBanner>
            <CommentImg src={ImageItem} alt="" />
          </CommentBanner>
          <CommentWrapper>
            <IconPrev/>
            <CommentContent>
              <CommentProfile>
                <ProfileImg>
                  <ProfilePic src={ImageItemTwo} alt=""/>
                </ProfileImg>
                <ProfileName>Alexis Hobbs</ProfileName>
                <ProfileDesc>Designer and Developer</ProfileDesc>
                <ProfileRatings>⭐⭐⭐⭐⭐</ProfileRatings>
              </CommentProfile>
              <CommentContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                repellat accusantium maxime illum consectetur maiores cupiditate
                sunt porro!
              </CommentContentText>
              <CommentSocial>
                <Facebook />
                <Twitter />
                <Instagram />
                <Behance />
              </CommentSocial>
            </CommentContent>
            <IconNext/>
          </CommentWrapper>
        </CommentContainer>
      </CommentSection>
    </>
  );
};

export default Comments;
