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
      <ProfilePageWrapper>
        <ProfileSummaryBox profileData={profileData} />
        {isAuthenticated && profileEmail === user.email && (
          <CreatePost userId={userId} />
        )}
        <OptionsWrapper>
          <span>
        {isAuthenticated && profileEmail === loggedUserEmail && (
          <Link to={`/updateprofile/${userId}`}>Update Profile</Link>
        )}
        </span>
        {isAuthenticated && profileEmail === loggedUserEmail && (
          <button onClick={handleClick}>Delete Profile</button>
        )}
        
        </OptionsWrapper>
      </ProfilePageWrapper>
      <BottomDivider />
      <TitlePosts>User Posts</TitlePosts>
      
        {userPosts &&
          userPosts.map((userPost) => {
            return <Post post={userPost} />;
          })}
      
      {/* <PostHistory /> */}
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
  font-family: "Lexend", sans-serif;
  font-style: italic;
  font-size: 30px;`
  ;
const OptionsWrapper = styled.div`
 border: 5px dashed #d0d2ff;
 display: flex;
 justify-content: flex-end;
 flex-direction: column;
 position: absolute;
 bottom: 20px;
  span {
    
    /* font-family: "Lexend", sans-serif; */
    font-family: "Edu SA Beginner", cursive;
    font-size: 26px;
    font-style: italic;
    color: black;
    width: 140px;
    height: 60px;
    /* background-color: #ffffff; */
    /* border: 5px dashed #d0d2ff; */
    cursor: pointer;
    &:hover {
      /* background-color: #D0D2FF; */
      opacity: 70%;
      color: #0000ff;
      border-radius: 20px;
    }
  }

  button {
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    font-style: italic;
    color: black;
    width: 140px;
    height: 60px;
    /* background-color: #ffffff; */
    /* border: 5px dashed #d0d2ff; */
    cursor: pointer;

    &:hover {
      /* background-color: #ff00ff; */
      opacity: 70%;
      color: #0000ff;
      border-radius: 20px;
    }
  }
`;

const BottomDivider = styled.div`
  
  padding: 20px;
  margin-bottom: 40px;
`;

const TitlePosts = styled.span`
  font-family: "Aboreto";
  font-style: italic;
  margin-left: 80px;
  font-size: 40px;
  /* padding: 50px; */
  margin-top: 80px;
  margin-bottom: 80px;
  
`;
const PostHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 50px;
  margin-left: 50px;
  margin-bottom: 100px;
  margin-top: 100px;
  
  border: 2px solid black;

  img {
    width: fit-content;
    height: 400px;
    border: 2px dashed black;
  }
`;

const PostDiv = styled.div`
  display: flex;
  height: fit-content;
  box-shadow: 5px 10px #0000ff;
  border: 2px dashed black;

 
`;
export default Profile;
