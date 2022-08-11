import React, { useContext, useEffect } from "react";

import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";


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
    <HomePageUltimateWrapper>
    <SideBar />
    <HomePageWrapperOne>
        <FollowedUsersImages><p>Image Posts Feed from followed users</p></FollowedUsersImages>
      <HomePageWrapper2>
        
        <RandomCommentHighlight>Random Comment Highlighted</RandomCommentHighlight>
        <NewPosts>New Posts</NewPosts>
        <NewLinks>New Links</NewLinks>
        
        

        <CurrentUserWrapper></CurrentUserWrapper>
      </HomePageWrapper2>
      </HomePageWrapperOne>
      </HomePageUltimateWrapper>
    </>
  );
};

const HomePageUltimateWrapper = styled.div`
/* display: grid; */
display: flex;
flex-direction: row;`;
const HomePageWrapper2 = styled.div`
border: 1px solid black;
`;
const FollowedUsersImages = styled.div`
border: 1px solid black;`;
const RandomCommentHighlight = styled.div`
  font-family: "Arial";
  border: 1px solid black;
  
`;

const NewPosts = styled.div`
border: 1px solid black;`;
const NewLinks = styled.div`
border: 1px solid black;
`;

const CurrentUserWrapper = styled.div`
border: 1px solid black;`;
const HomePageWrapperOne = styled.div`
border: 1px solid black;`
;

export default HomePage;
