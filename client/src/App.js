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
import { CurrentUserContext } from "./Context/CurrentUserContext";
import GlobalStyles from "./Styles/GlobalStyles";
import SignUp from "./Pages/SignUp";

//function instead?
const App = () => {
  const {
    setCurrentUser,
    setHomeFeed,
    setError,
    actions: { receiveUserInfoFromServer },
  } = useContext(CurrentUserContext);

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
            <Route path="/" element={<HomePage />} />
            {/* <Route
                            path="/teachers/:ArtCategory"
                            element={<TeachersByCategory />}
                        /> */}
            <Route path="/teachers/" element={<AllProfiles />} />
            <Route path="/teachers/:teacherId" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </>
  );
};

const Main = styled.div`
  min-height: 60vh;
`;

export default App;
