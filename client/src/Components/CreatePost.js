import React, { useState } from "react";
import styled from "styled-components";
const CreatePost = () => {
  const [postData, setPostData] = useState({});
  const [uploadedFile, setUploadedFile] = useState();

  const onChangeHandler = (e) => {
    //used the spread operator to keep previous fields untouched when updating info
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const fileData = new FormData();
    fileData.append("file", uploadedFile[0]);
    fileData.append("upload_preset", "artcolt");

    fetch("https://api.cloudinary.com/v1_1/dwexwvttq/image/upload", {
      method: "POST",
      body: fileData,
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setPostData({ ...postData, url: data.secure_url });
        })
        .then(() => {
          console.log("here", postData);
          fetch("/api/post-media", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
        })
    );
  };
  return (
    <Wrapper>
      <CreatePostTitle>create post</CreatePostTitle>
      <form onSubmit={submitHandler}>
        <span>Image</span>
        <input
          type="file"
          onChange={(event) => {
            setUploadedFile(event.target.files);
          }}
        />
        <span>Title</span>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <span>Year</span>
        <input
          type="text"
          name="year"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <span>Materials</span>
        <input
          type="text"
          name="materials"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <span>Comments</span>
        <input
          type="text"
          name="comments"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <button>Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 3px solid #0000ff;
  box-shadow: 5px 10px #0000ff;
  height: 800px;
  width: 400px;
  margin-right: 150px;
  margin-left: 50px;

  padding-top: 20px;
  padding-right: 20px;
`;

const CreatePostTitle = styled.h3`
  font-family: "Arial";
`;

export default CreatePost;
