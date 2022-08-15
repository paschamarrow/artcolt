import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import SignIn from "./Pages/SignIn";
import AllProfiles from "./Pages/AllProfiles";
import Profile from "./Pages/Profile";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
// import Footer from "./Components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
// import GlobalStyles from "./Styles/GlobalStyles";
import SignUp from "./Pages/SignUp";
import SideBar from "./Components/SideBar";
import LandingPage from "./Pages/LandingPage";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Components/Loading";
import FeedProvider from "./Context/FeedContext";

const App = () => {
  const {
    setCurrentUser,
    setHomeFeed,
    actions: { receiveUserInfoFromServer, setError, getHomeFeed },
  } = useContext(UserContext);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  // useEffect(() => {
  //   fetch("api/get-feed")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHomeFeed(data);
  //     })
  //     .catch(() => {
  //       setError(true);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/get-profiles")
  //     .then((something) => something.json())
  //     .then((data) => {
  //       setCurrentUser(data);
  //       receiveUserInfoFromServer(data);
  //     });
  // }, []);
  useEffect(() => {
    fetch("/api/get-media")
      .then((something) => something.json())
      .then((data) => {
        console.log("data,data", data);
        getHomeFeed(data.data);
      });
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/teachers/me" element={<Profile/>} />
            <Route path="/teachers/" element={<AllProfiles />} />
            <Route path="/teachers/:userId" element={<Profile />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
};

const Main = styled.div`
  min-height: 60vh;
`;

export default App;
