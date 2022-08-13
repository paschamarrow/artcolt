import { User } from "@auth0/auth0-react";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const CreatePost = () => {
  const [postData, setPostData] = useState({});
  const [uploadedFile, setUploadedFile] = useState();

  const {
    state: { loggedInUser },
  } = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);
  const onChangeHandler = (e) => {
    //used the spread operator to keep previous fields untouched when updating info
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandlerTwo = async (e) => {
    e.preventDefault();

    const fileData = new FormData();
    fileData.append("file", uploadedFile[0]);
    fileData.append("upload_preset", "artcolt");
    const cloudinaryRes = await fetch(
      "https://api.cloudinary.com/v1_1/dwexwvttq/image/upload",
      {
        method: "POST",
        body: fileData,
      }
    );
    const cloudinaryData = await cloudinaryRes.json();
    const expressRes = await fetch("/api/post-media", {
      method: "POST",
      body: JSON.stringify({
        ...postData,
        url: cloudinaryData.secure_url,
        email: loggedInUser,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    await expressRes.json();

    setPostData({ ...postData, url: cloudinaryData.secure_url });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const fileData = new FormData();
  //   fileData.append("file", uploadedFile[0]);
  //   fileData.append("upload_preset", "artcolt");

  //   fetch("https://api.cloudinary.com/v1_1/dwexwvttq/image/upload", {
  //     method: "POST",
  //     body: fileData,
  //   }).then((res) =>
  //     res.json().then((data) => {
  //       fetch("/api/post-media", {
  //         method: "POST",
  //         body: JSON.stringify({ ...postData, url: data.secure_url }),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((res) => {
  //           res.json();
  //         })
  //         .then((data) => {
  //           console.log("here", postData);
  //           setPostData({ ...postData, url: data.secure_url });
  //         });
  //     })
  //   );
  // };

  return (
    <Wrapper>
      <CreatePostTitle>create post</CreatePostTitle>
      <form onSubmit={submitHandlerTwo}>
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
  height: 500px;
  width: 800px;
  margin-right: 150px;
  margin-left: 50px;

  padding-top: 20px;
  padding-right: 20px;
`;

const CreatePostTitle = styled.h3`
  font-family: "Arial";
`;

export default CreatePost;
