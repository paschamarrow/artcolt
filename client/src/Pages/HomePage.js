import React, { useContext, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

const HomePage = () => {
  const {
    state: { allUsers },
    actions: { getUsers },
  } = useContext(UserContext);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  console.log(user);
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
        <FeedWrapper>
          <FollowedUsersImages>
            <FeedTitle>Posts Feed </FeedTitle>
          </FollowedUsersImages>
          <HomePageWrapperTwo>
            <RandomHighlight>
              <HighlightsTitle>Highlights</HighlightsTitle>
            </RandomHighlight>
            
            

            <CurrentUserWrapper><CurrentUserStuff>Stuff that changes with current user</CurrentUserStuff></CurrentUserWrapper>
          </HomePageWrapperTwo>
        </FeedWrapper>
      </HomePageUltimateWrapper>
      <Footer />
    </>
  );
};

const HomePageUltimateWrapper = styled.div`
  /* display: grid; */
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-y: scroll;
  width: 1400;
`;
const FeedWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
 
  width: 1200px;
`;
const FollowedUsersImages = styled.div`
  border: 1px solid black;
  width: 600px;
  margin: 25px;
  padding: 44px;
  border-radius: 20px;
  border: 3px solid #0000ff;
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #0000ff;
`;

const FeedTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

const RandomHighlight = styled.div`
  
  max-width: 600px;
  font-family: "Arial";
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 3px solid #0000ff;
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #0000ff;
`;
const HighlightsTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;


const CurrentUserWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 3px solid #0000ff;
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #0000ff;
`;

const CurrentUserStuff = styled.h2`
font-family: "Arial";`;
const HomePageWrapperTwo = styled.div`
  border: 1px solid black;
`;
export default HomePage;
// withAuthenticationRequired(
// , {
//   //show a message white the user waits to be redirected to the login page

//   onRedirecting: () => {
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   },
// });
