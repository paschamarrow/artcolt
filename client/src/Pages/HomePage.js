import React, { useContext, useEffect } from "react";

import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";


const HomePage = () => {
  const {
    state: { allUsers },
    actions: { getUsers },
  } = useContext(UserContext);

  //fetches all user data

  // useEffect(() => {
  //   fetch("/api/get-users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getUsers(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  //returning Loading
  // console.log(allUsers);
  // if (!allUsers) {
  //   return <p>Loading </p>;
  // }

  return (
    <>
      <HomePageWrapper>
        <DivOne><ol><p><Link to="/teachers">ALL USERS</Link></p></ol></DivOne>
        <FollowedUsers></FollowedUsers>
        <FollowedHeading>Following</FollowedHeading>
        <NewPostsDiv></NewPostsDiv>
        

        <CurrentUserWrapper></CurrentUserWrapper>
      </HomePageWrapper>
    </>
  );
};

const HomePageWrapper = styled.div``;
const FollowedUsers = styled.div``;
const FollowedHeading = styled.div`
  font-family: "Arial";
  
`;

const NewPostsDiv = styled.div``;

const CurrentUserWrapper = styled.div``;
const DivOne = styled.div``;

export default HomePage;
