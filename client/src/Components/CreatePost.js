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
    console.log(cloudinaryData);
    const expressRes = await fetch("/api/post-media", {
      method: "POST",
      body: JSON.stringify({
        ...postData,
        url: cloudinaryData.secure_url,
        email: loggedInUser,
        materials: cloudinaryData.materials ?? null,
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
      <CreatePostDiv>
        <CreatePostHeader>
          <CreatePostHeader>Create Post</CreatePostHeader>
        </CreatePostHeader>
        <Form onSubmit={submitHandlerTwo}>
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
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </CreatePostDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 5px 10px #0000ff;
  height: 600px;
  width: 400px;
  margin-right: 50px;
  margin-left: 50px;
  font-family: "Lexend", sans-serif;
  background-color: #d0d2ff;
  padding-top: 20px;
  padding: 10px;
  padding-right: 20px;
  margin-top: 100px;
`;
const CreatePostHeader = styled.h3`
  font-family: "Aboreto";
  font-style: italic;
  margin-left: 20px;
  font-size: 40px;
`;

const CreatePostDiv = styled.div``;

const Form = styled.form`
  display: flex;
  padding: 20px;
  padding: 30px;
  font-size: 20px;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  font-family: "Lexend", sans-serif;
  font-size: 26px;
  color: black;
  width: 310px;
  height: 80px;
  background-color: #ffffff;
  border: 10px solid #d0d2ff;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #ff00ff;
    color: white;
    border-radius: 20px;
  }
`;

export default CreatePost;
