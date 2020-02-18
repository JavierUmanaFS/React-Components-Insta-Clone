// You will add code in this file
// Bring in useState
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {

  // Passing props into this file 
  const [likes, setLikes] = useState(props.igPost.likes);

 // set up state for the likes
    const incrementLike = () => {
      setLikes(likes => likes + 1);
    };
 
  return (
    <div className="post-border">
      <PostHeader
        username={props.igPost.username}
        thumbnailUrl={
          props.igPost.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.igPost.imageUrl}
        />
      </div>
      {/* Passing LikeSection the props 
          to increase likes / likes */}
      <LikeSection
      incrementLike={incrementLike}
      likes={likes} />

      <CommentSection
        postId={props.igPost.imageUrl}
        comments={props.igPost.comments}
      />
    </div>
  );
};

export default Post;


