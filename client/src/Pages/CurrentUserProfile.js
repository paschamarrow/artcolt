import React, { useEffect, useState } from "react";
import ProfileSummaryBox from "../Components/ProfileSummaryBox";
import CreatePost from "../Components/CreatePost";
import SideBar from "../Components/SideBar";

import styled from "styled-components"
const CurrentUserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const currentUser = "2194c5f9-f806-47b5-a27b-5c3f3a860a3a";
  useEffect(() => {
    fetch(`/api/get-user/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data.data);
      });
  }, []);

  return (
    <ProfilePageWrapper>
      <SideBar />

      <ProfileSummaryBox profileData={profileData} />
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
export default CurrentUserProfile;