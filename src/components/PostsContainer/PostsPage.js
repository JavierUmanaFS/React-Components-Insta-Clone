//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'


const PostsPage = () => {

  // Moved dummyData Array/Obj into Posts 
  const [posts] = useState(dummyData);
  // set up state for your data
  // console.log(posts)
  return (
    <div className="posts-container-wrapper">
    {/* Mapping new Array of posts */}
     {posts.map(e =>( 
        <Post key={e.username} igPost={e} />
      ))}
      {/* Giving Post file props from Parent,
          Keys help react identify which items have changed  */}
    </div>
  );
};

export default PostsPage;

