import React, { useContext } from "react";
import { FeedContext } from "../Context/FeedContext";
import { UserContext } from "../Context/UserContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProfileSummaryBox = () => {
  const {
    state: { userId },
    actions: { getUser },
  } = useContext(UserContext);

  //fetches all user data

  useEffect(() => {
    fetch(`/api/get-user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        getUser(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  //returning Loading
  console.log(userId);
  if (!userId) {
    return <p>profile not found</p>;
  }
  return (
    <ProfileSummary>
      <ProfileImage><img src={userId.avatarSrc} /></ProfileImage>
      <NameHeader></NameHeader>
      <PostsNumber></PostsNumber>
      <Bio>
      </Bio><TeachingStatement></TeachingStatement>
    </ProfileSummary>
  );
};

const ProfileSummary = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px #0000ff;
  height: 400px;
  width: 300px;
  margin-right: 150px;
  margin-left: 50px;
  font-family: Arial, Helvetica, sans-serif;
  background-color:#D0D2FF;
  padding-top: 20px;
  padding-right: 20px;`;
 const ProfileImage = styled.img``;
 const NameHeader = styled.img``;
 const PostsNumber = styled.div``;
 const Bio = styled.div``;
 const TeachingStatement = styled.div``;

export default ProfileSummaryBox;
