import React, { useContext, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";
import saved from "../styleimages/SAVED.jpg";
import highlights from "../styleimages/HIGHLIGHTS.jpg";
import { FeedContext } from "../Context/FeedContext";
import Feed from "../Components/Feed";
import Post from "../Components/Post";

const HomePage = () => {
  const {
    state: { allUsers },
    loggedInUser,
    actions: { getUsers },
    setLoggedInUser,
  } = useContext(UserContext);
  //if we wanna display user info on homepage import loggedinUser
  const { setFeed, feed } = useContext(FeedContext);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  // //fetches all user data

  // useEffect(() => {
  //   fetch("/api/get-users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       allUsers(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //determine who user is here
  useEffect(() => {
    console.log("is it real?", isAuthenticated);
    if (isAuthenticated) {
      fetch(`/api/get-useremail/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoggedInUser(data.data);
        })

        .catch((err) => console.log(err));
    }
  }, []);

  //grab all media for main homefeed
  useEffect(() => {
    fetch("/api/get-media")
      .then((res) => res.json())
      .then((data) => {
        setFeed(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // //link styling
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "black",
  // };

  // if (!allUsers) {
  //   return <p>Loading </p>;
  // }

  const selectedPost = feed && feed[Math.floor(Math.random() * feed.length)];
  console.log("selectedPost", selectedPost);
  return (
    <>
      <HomePageUltimateWrapper>
        <SideBar />
        <FeedWrapper>
          <SavedPosts>
            {!!feed && <Feed feed={feed} />}
            {/* <FeedTitle> </FeedTitle> */}
          </SavedPosts>
          <HomePageWrapperTwo>
            <RandomHighlight>
              <HighlightsTitle></HighlightsTitle>
            </RandomHighlight>
            {feed && <Post post={selectedPost} />}

            <CurrentUserWrapper>
              <CurrentUserStuff>
                <img src={saved} />
              </CurrentUserStuff>
            </CurrentUserWrapper>
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
  margin-left: 100px;
`;
const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;

  border: solid 1px red;
  width: 1200px;
`;
const SavedPosts = styled.div`
  width: 600px;
  margin: 25px;
  padding: 44px;
  height: fit-content;

  border: 3px solid #d0d2ff;
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #d0d2ff;
  img {
    width: 100px;
    align-self: left;
  }
`;

const FeedTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

const RandomHighlight = styled.div`
  max-width: 600px;
  font-family: "Arial";
  display: flex;
  flex-direction: row;
  /* border-radius: 20px; */
  /* border: 3px solid #0000ff; */
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #d0d2ff;
`;
const HighlightsTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  img {
    width: 100px;
    align-self: left;
  }
`;

const CurrentUserWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  /* border-radius: 20px; */
  /* border: 3px solid #0000ff; */
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #d0d2ff;
  img {
    width: 100px;
    align-self: left;
  }
`;

const CurrentUserStuff = styled.h2`
  border: 3px solid #d0d2ff;
  font-family: "Arial";
`;
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
