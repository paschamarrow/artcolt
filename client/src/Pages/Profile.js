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

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [profileEmail, SetProfileEmail] = useState(null);
  const { feed } = useContext(FeedContext);
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

  const loggedUserEmail = isAuthenticated && user.email;
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
      <Link to={`/updateprofile/${userId}`}>Update your profile</Link>

      <ProfilePageWrapper>
        <SideBar />

        <ProfileSummaryBox profileData={profileData} />
        <CreatePost />
      </ProfilePageWrapper>
      {isAuthenticated && profileEmail === loggedUserEmail && (
        <button onClick={handleClick}>Delete Profile</button>
      )}
    </>
  );
};

const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;

  width: 1400;
`;

export default Profile;
