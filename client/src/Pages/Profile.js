import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreatePost from "../Components/CreatePost";
import SideBar from "../Components/SideBar";
import { UserContext } from "../Context/UserContext";
import { FeedContext } from "../Context/FeedContext";
import FeedProvider from "../Context/FeedContext";
import Feed from "../Components/Feed";
import ProfileSummaryBox from "../Components/ProfileSummaryBox";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const { feed } = useContext(FeedContext);
  const { userId } = useParams();

  const Context = useContext(FeedContext);
  console.log("userid", userId)
  useEffect(() => {
    //render what you clicked me or someone else
    if (userId) {
    fetch(`/api/get-user/${userId}`)
    
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data.data);
      })
      .catch((err) => console.log(err));
    }
  }, [userId]);

  
  console.log("feed", feed);
  return (
    <ProfilePageWrapper>
      <SideBar />

      <ProfileSummaryBox profileData = {profileData}/>
      <CreatePost />
    </ProfilePageWrapper>
  );
};

const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;

  width: 1400;
`;

export default Profile;
