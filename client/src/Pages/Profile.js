import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfilePageWrapper>
    <CurrentUserInfoWrapper>
      <ProfilePicture></ProfilePicture>
      <ProfileDataList></ProfileDataList>
    </CurrentUserInfoWrapper>
    <ArtworkWrapper>
      <ImageFeed></ImageFeed>
    </ArtworkWrapper>
    <FileUploadsWrapper>
  
    </FileUploadsWrapper>
    <StatementWrapper></StatementWrapper>
    <CommentsBox></CommentsBox>
    <LinksBox></LinksBox>
    <FollowersBox></FollowersBox>
    </ProfilePageWrapper>

  );
};

const ProfilePageWrapper= styled.div``;
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
