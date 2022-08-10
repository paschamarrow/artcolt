import React, { useState } from "react";

const PostDiv = () => {

    const uploadImage = (files) => {
        console.log([files])

        //fetch for files here or use axios
    }
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          uploadImage(event.target.files)
        }}
      />
    </div>
  );
};

export default PostDiv;
