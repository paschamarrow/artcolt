import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

//email, bio, statement, firstName, lastName, location
const UpdateProfile = () => {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    //used the spread operator to keep previous fields untouched when updating info
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    console.log("here");
    console.log(profileData);
    e.preventDefault();
    fetch(`/api/update-user/${userId}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate(`/teachers/${userId}`);
        }
      });
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <label>Bio</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="bio"
          type="text"
        />

        <label>Email</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="email"
          type="text"
        />

        <label>Statement</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="statement"
          type="text"
        />

        <label>FirstName</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="firstName"
          type="text"
        />

        <label>LastName</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="lastName"
          type="text"
        />

        <label>Location</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="location"
          type="text"
        />

        <button>Update</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 90px;
  padding-top: 80px;
  padding-bottom: 80px;

  form {
    width: 90vw;
    padding: 80px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    font-family: "Aboreto";
    border-color: lightgrey;
    color: black;

    background-image: linear-gradient(to right, white, blue);
    &:focus {
      outline: 4px solid #ff00ff;
      border-radius: 1px;
    }
  }

  input {
    width: 90vh;
    height: 5vh;
  }

  button {
    width: 30vh;

    background-color: #0000ff;
    border: none;
    border-radius: 1px;
    height: 40px;
    width: 500px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 18px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: #9f8c76;
      transition: 0.7s;
    }
  }
`;
export default UpdateProfile;
