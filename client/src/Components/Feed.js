import React from "react";
import DisplayProps from "./DisplayProps";
import Post from "./Post";

const Feed = ({ feed }) => {
  return (
    // <div>{feed.map(post => <DisplayProps post={post} />)}</div>
    <div>
      {feed.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Feed;
