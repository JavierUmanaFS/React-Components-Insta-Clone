// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import { createPortal } from "react-dom";

const CommentSection = props => {
  // Add state for the comments
  const [comments]= useState(props.comments)

  return (
    <div>
      {/* Passing new mapped array containing comments to Comment file */}
      {comments.map((comment, index) =>
      <Comment key={index} comment={comment}  />)} 
      <CommentInput /> 
    </div>
  );
};

export default CommentSection;
