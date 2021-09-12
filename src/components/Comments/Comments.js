import React, {useState} from "react";
import Comment from "./Comment"

import {
  CommentSection,
  CommentContainer,
  CommentBanner,
  CommentImg,
  CommentWrapper,
  IconNext,
  IconPrev,
  PrevComment,
  NextComment
} from "./CommentsElements";
import ImageItem from "../../assets/images/comment-bg.jpg"

const Comments = () => {
    const [index, setIndex] = useState(0);

    const handleAddIndex = () => {
      setIndex(index + 1);
      console.log(index);
    };

    const handleSubtractIndex = () => {
      setIndex(index - 1);
      console.log(index);
    };
  return (
    <>
      <CommentSection>
        <CommentContainer>
          <CommentBanner>
            <CommentImg src={ImageItem} alt="" />
          </CommentBanner>
          <CommentWrapper>
            <PrevComment onClick={handleSubtractIndex}>
              <IconPrev />
            </PrevComment>
            <Comment index={index} setIndex={setIndex} />
            <NextComment onClick={handleAddIndex}>
              <IconNext/>
            </NextComment>
          </CommentWrapper>
        </CommentContainer>
      </CommentSection>
    </>
  );
};

export default Comments;
