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
  width: 90vw;
  margin: 0rem auto;
  border: 1px solid red;

  form {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default UpdateProfile;
