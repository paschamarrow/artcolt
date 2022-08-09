import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";

const HomePage = () => {
  const {
    state: { allUsers },
    actions: { getUsers },
  } = useContext(UserContext);

  //fetches all user data

  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((data) => {
        getUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  //returning Loading
  console.log(allUsers);
  if (!allUsers) {
    return <p>Loading </p>;
  }

  return (
    <>
      <HomePageWrapper>
        <FollowedUsers></FollowedUsers>
        <FollowedHeading>Following</FollowedHeading>
        <NewPostsDiv></NewPostsDiv>
        <AllUsers>
          {allUsers.map((user) => {
            return (
              <AllUsersBox>
                <Link to={`/teachers/${user._id}`} style={linkStyle}>
                  <Name>{user.firstName}</Name>
                </Link>
              </AllUsersBox>
            );
          })}
        </AllUsers>

        <CurrentUserWrapper></CurrentUserWrapper>
      </HomePageWrapper>
    </>
  );
};

const HomePageWrapper = styled.div``;
const FollowedUsers = styled.div``;
const FollowedHeading = styled.div`
  font-family: "Arial";
  font-weight: lighter;
`;
const NewPostsDiv = styled.div``;
const AllUsers = styled.div``;
const CurrentUserWrapper = styled.div``;
const AllUsersBox = styled.div``;
const Name = styled.div``;
export default HomePage;
