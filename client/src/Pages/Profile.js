import React, { useContext } from "react";
import styled from "styled-components";
import CreatePost from "../Components/CreatePost";
import SideBar from "../Components/SideBar";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
  const {
    state: { allUsers },
    actions: { getUsers },
  } = useContext(UserContext);

  return (
    <ProfilePageWrapper>
      <SideBar />

      <CreatePost />
    </ProfilePageWrapper>
  );
};

const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1400;
`;
export default Profile;
