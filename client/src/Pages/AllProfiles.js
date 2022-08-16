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
                  <Link to={`/teachers/${user._id}`}>
                    {user.firstName}{" "}
                    
                      <LastName>{user.lastName}</LastName>
                    </Link>
                  </Name>
                  <ProfileImage>
                    <img src={user.avatarSrc} />
                  </ProfileImage>

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
  font-family: "Aboreto";

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-weight: lighter;
  font-size: 50px;
`;
const AllUsersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 36px;
  /* padding: 10px; */
  margin-top: 30px;
  margin-bottom: 30px;
  /* font-family: 'Aboreto', cursive; */
  font-family: 'Edu SA Beginner', cursive;
  &:hover {
    color: #0000ff;
  }
`;
const LastName = styled.div``;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
`;
const Location = styled.div`
  display: flex;
  font-style: italic;
`;

const Bio = styled.div`
  display: flex;
  margin-top: 40px;
`;

const AllUsersList = styled.ul`
  list-style: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* font-family: 'Aboreto', cursive; */
  font-weight: lighter;
  width: 600px;
  border-top: 1px solid #ff00ff;
  height: 180px;
  font-size: 20px;
  
`;

const AllUsers = styled.div``;
export default AllProfiles;
