import React, { useContext } from "react";
import { FeedContext } from "../Context/FeedContext";
import { UserContext } from "../Context/UserContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProfileSummaryBox = ({ profileData }) => {
  const {
    state: { userId },
    actions: { getUser },
    loggedInUser,
  } = useContext(UserContext);

  //const profileData = profileData ? profileData : loggedInUser;

  //fetches all user data

  // useEffect(() => {
  //   fetch(`/api/get-user/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getUser(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  if (!profileData) {
    return <p>profile not found</p>;
  }

  return (
    <ProfileInfoWrapper>
      <NameHeader>
        {profileData.firstName}<p></p>
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
    </ProfileInfoWrapper>
  );
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #D3D3D3;
  background-color:#D3D3D3;
  box-shadow: 5px 10px #0000ff;
  padding: 50px;
  margin-top: 100px;
  height: fit-content;
  width: 800px;
`;
const ProfileImage = styled.div`
  img {
    width: 300px;
    box-shadow: 5px 10px #0000ff;
  }
`;
const NameHeader = styled.h3`
font-family: 'Edu SA Beginner', cursive;
font-size: 30px;`
;

const Bio = styled.div`
width: 500px;
font-size: 26px;
font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
h3 {
  font-family: "Aboreto";
}
`;
const TeachingStatement = styled.div`
width: 500px;
font-size: 26px;
font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
h3 {
  font-family: "Aboreto";
}`
;

export default ProfileSummaryBox;
