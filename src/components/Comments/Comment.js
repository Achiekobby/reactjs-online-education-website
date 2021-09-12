import React, { useState, useEffect } from "react";
import {
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
} from "./CommentsElements";
import { CommentItems } from "../../data/CommentData";

const Comment = ({ index, setIndex }) => {
  const [commentData, setCommentData] = useState(CommentItems);

  useEffect(() => {
    let lastIndex = commentData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, commentData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      {commentData.map((person, personIndex) => {
        const { id, image, name, jobTitle, ratings, commentText } = person;
        let position = "nextComment";
        if (personIndex === index) {
          position = "activeComment";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === commentData.length - 1)
        ) {
          position = "prevComment";
        }
        return (
          <CommentContent key={id} className={position}>
            <CommentProfile>
              <ProfileImg>
                <ProfilePic src={image} alt={name} />
              </ProfileImg>
              <ProfileName>{name}</ProfileName>
              <ProfileDesc>{jobTitle}</ProfileDesc>
              <ProfileRatings>{ratings}</ProfileRatings>
            </CommentProfile>
            <CommentContentText>{commentText}</CommentContentText>
            <CommentSocial>
              <Facebook />
              <Twitter />
              <Instagram />
              <Behance />
            </CommentSocial>
          </CommentContent>
        );
      })}
    </>
  );
};

export default Comment;
