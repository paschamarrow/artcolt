import React, { useContext, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";
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

  //link styling
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  if (!allUsers) {
    return <Loading />;
  }

  const selectedPost = feed && feed[Math.floor(Math.random() * feed.length)];
  const selectedPostartist =
    isAuthenticated &&
    allUsers &&
    allUsers.find((user) => user.email === selectedPost.email);

  return (
    <>
      {" "}
      <PageWrapper>
        <AllPosts>
          <FeedHeader> media FEED </FeedHeader>
          {!!feed && <Feed feed={feed} />}
        </AllPosts>
        <FeatureWrapper>
          <FeaturedPost>
            <FeatureHeader>FEATURED POST</FeatureHeader>
            {feed && (
              <Post
                post={selectedPost}
                selectedPostartist={selectedPostartist}
              />
            )}
          </FeaturedPost>
        </FeatureWrapper>
      </PageWrapper>
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-top: 40px;
  background-image: linear-gradient(to right, gray, white);
  
`;

const FeedHeader = styled.h3`
  font-family: "Aboreto";
  justify-content: left;
  font-size: 40px;
  display: flex;
`;

const AllPosts = styled.div`
  width: 600px;
  margin-left: 40px;
  height: fit-content;
  display: flex;

  & background-color {
    opacity: 50%;
  }

  img {
    width: 400px;
    align-self: left;
    border: 0.5px dashed black;
  }
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 50px;
  margin-left: 50px;
  margin-bottom: 100px;
  margin-top: 60px;
  padding: 50px;
`;
const FeaturedPost = styled.div`
  display: flex;
  height: 800px;
  background-color: #d0d2ff;

  img {
    width: 700px;
    align-self: left;
  }
`;
const FeatureHeader = styled.h3`
  font-family: "Aboreto";
  justify-content: center;
  font-size: 40px;
  margin-left: 50px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
export default HomePage;
