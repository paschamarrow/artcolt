import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreatePost from "../Components/CreatePost";
import SideBar from "../Components/SideBar";
import { UserContext } from "../Context/UserContext";
import { FeedContext } from "../Context/FeedContext";
import FeedProvider from "../Context/FeedContext";
import Feed from "../Components/Feed";
import ProfileSummaryBox from "../Components/ProfileSummaryBox";
import { Link, useParams } from "react-router-dom";

import Post from "../Components/Post";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [profileEmail, SetProfileEmail] = useState(null);
  const [feed, setFeed] = useState(null);
  //const { feed } = useContext(FeedContext);

  const { userId } = useParams();

  const { isAuthenticated, user } = useAuth0();

  const Context = useContext(FeedContext);

  useEffect(() => {
    //render what you clicked me or someone else
    if (userId) {
      fetch(`/api/get-user/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("here", data.data);
          setProfileData(data.data);
          SetProfileEmail(data.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);

  useEffect(() => {
    fetch("/api/get-media")
      .then((res) => res.json())
      .then((data) => {
        setFeed(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const loggedUserEmail = isAuthenticated && user.email;

  const userPosts = feed && feed.filter((post) => post.userId === userId);
  console.log("userPosts", userPosts);
  const handleClick = () => {
    if (profileEmail === loggedUserEmail) {
      fetch(`/api/delete-user/${userId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            window.alert("hope to see you again!");
          }
        });
    }
  };
  return (
    <>
      <TopDivider />
      <ProfilePageWrapper>
        <ProfileSummaryBox profileData={profileData} />
        {isAuthenticated && profileEmail === user.email && (
          <CreatePost userId={userId} />
        )}
        {isAuthenticated && profileEmail === loggedUserEmail && (
          <Link to={`/updateprofile/${userId}`}>Update your profile</Link>
        )}
        <PostsNumber></PostsNumber>
        {isAuthenticated && profileEmail === loggedUserEmail && (
          <button onClick={handleClick}>Delete Profile</button>
        )}
      </ProfilePageWrapper>
      {userPosts &&
        userPosts.map((userPost) => {
          return <Post post={userPost} />;
        })}
      <BottomDivider />
    </>
  );
};

const ProfilePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  width: 80vw;

  margin: 4rem auto;
`;

const BottomDivider = styled.div`
  border-bottom: 1px solid red;
`;
const TopDivider = styled.div`
  border-top: 1px solid red;
`;
const PostsNumber = styled.div``;
export default Profile;
