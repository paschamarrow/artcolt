import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import SignIn from "./Pages/SignIn";
import AllProfiles from "./Pages/AllProfiles";
import Profile from "./Pages/Profile";
import Notifications from "./Components/Notifcations";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
import GlobalStyles from "./Styles/GlobalStyles";
import SignUp from "./Pages/SignUp";
import SideBar from "./Components/SideBar";
import LandingPage from "./Pages/LandingPage";

//function instead?
const App = () => {
  const {
    setCurrentUser,
    setHomeFeed,
    
    actions: { receiveUserInfoFromServer, setError},
  } = useContext(UserContext);

  useEffect(() => {
    fetch("api/get-feed")
      .then((res) => res.json())
      .then((data) => {
        setHomeFeed(data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetch("/get-profiles")
      .then((something) => something.json())
      .then((data) => {
        setCurrentUser(data);
        receiveUserInfoFromServer(data);
      });
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<HomePage />} />
            
            <Route path="/teachers/" element={<AllProfiles />} />
            <Route path="/teachers/:userId" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
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
