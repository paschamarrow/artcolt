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
    <>
      <ProfilePageWrapper>
        <SideBar />
        <CurrentUserInfoWrapper>
          <ProfilePicture></ProfilePicture>
          <ProfileDataList></ProfileDataList>
        </CurrentUserInfoWrapper>
        <ArtworkWrapper>
          <ImageFeed></ImageFeed>
        </ArtworkWrapper>
        <FileUploadsWrapper></FileUploadsWrapper>
        <StatementWrapper></StatementWrapper>
        <CommentsBox></CommentsBox>
        <LinksBox></LinksBox>
        <FollowersBox></FollowersBox>
      </ProfilePageWrapper>
      <CreatePost />
    </>
  );
};

const ProfilePageWrapper = styled.div``;
const CurrentUserInfoWrapper = styled.div``;
const ProfilePicture = styled.div``;
const ProfileDataList = styled.div``;
const ArtworkWrapper = styled.div``;
const FileUploadsWrapper = styled.div``;
const FollowersBox = styled.div``;
const StatementWrapper = styled.div``;
const CommentsBox = styled.div``;
const LinksBox = styled.div``;
const ImageFeed = styled.div``;

export default Profile;
