import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";


const AllProfiles = () => {
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
      <AllUsers>
        <AllUsersHeading>ALL USERS</AllUsersHeading>
        {allUsers.map((user) => {
          return (
            <AllUsersBox>
              <Link to={`/teachers/${user._id}`} style={linkStyle}>
                <AllUsersList>
                  <Name>
                    {user.firstName} <Link to={`/teachers/${user._id}`}></Link>
                  </Name>
                  <LastName>{user.lastName}</LastName>

                  <Location>{user.location}</Location>
                  <Bio>{user.bio}</Bio>
                </AllUsersList>
              </Link>
            </AllUsersBox>
          );
        })}
      </AllUsers>
    </>
  );
};

const AllUsersHeading = styled.p`
  font-family: "Arial";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: lighter;
  font-size: 25px;
 
`;
const AllUsersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div``;
const LastName = styled.div``;

const Location = styled.div``;
const AllUsers = styled.div``;
const Bio = styled.div``;
const AllUsersList = styled.ul`
  list-style: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: lighter;
  width: 600px;
  border-top: 1px solid #e3c4a6;
  height: 180px;
`;
export default AllProfiles;
