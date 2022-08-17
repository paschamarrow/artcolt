import React, { useContext } from "react";
import { FeedContext } from "../Context/FeedContext";
import { UserContext } from "../Context/UserContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

const ProfileSummaryBox = ({ profileData }) => {
  const {
    state: { userId },
    actions: { getUser },
    loggedInUser,
  } = useContext(UserContext);

  //const profileData = profileData ? profileData : loggedInUser;


  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  if (!profileData) {
    return <Loading />;
  }

  return (
    <ProfileInfoWrapper>
      <h3>PROFILE</h3>
      <NameHeader>
        {profileData.firstName}
        <p></p>
        {profileData.lastName}

      </NameHeader>
      <ProfileImage>
        <img src={profileData.avatarSrc} />
      </ProfileImage>

      <Bio>
        <h3>BIO</h3>
        {profileData.bio}
        
      </Bio>
      <TeachingStatement>
        <h3>Teaching Statement</h3>
        {profileData.statement}
      </TeachingStatement>
      <h3>EMAIL</h3><span>{" "}+ {profileData.email} </span>
    </ProfileInfoWrapper>
  );
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #d3d3d3;
  background-color: #d3d3d3;
  box-shadow: 5px 10px #0000ff;
  padding: 50px;
  margin-top: 100px;
  height: fit-content;
  width: 800px;
  h3 {
    font-family: "Aboreto";
  }
`;
const ProfileImage = styled.div`
  img {
    width: 300px;
    box-shadow: 5px 10px #0000ff;
  }
`;
const NameHeader = styled.h2`
  font-family: "Edu SA Beginner", cursive;
  font-size: 30px;
`;
const Bio = styled.div`
  width: 500px;
  font-size: 26px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  h3 {
    font-family: "Aboreto";
  }
  span {
    font-family: 'Courier New', Courier, monospace;
  }
`;
const TeachingStatement = styled.div`
  width: 500px;
  font-size: 26px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  h3 {
    font-family: "Aboreto";
  }
`;
export default ProfileSummaryBox;
