import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <BarWrapper>
      <Links to={{ pathname: "/home" }}>
        <Subtitles>
          <span> HOME </span>
        </Subtitles>
      </Links>
      <Links to={{ pathname: "/me" }}>
        <Subtitles>
          <span> PROFILE </span>
        </Subtitles>
      </Links>
      <Links to={{ pathname: "/teachers" }}>
        <Subtitles>
          <span> ALL USERS </span>
        </Subtitles>
      </Links>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  margin-left: 800px;

  position: absolute;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  height: 40px;
  align-items: left;
  padding: 5px 15px;

  &:hover {
    background-color: #d0d2ff;
    color: #ff00ff;
    border-radius: 20px;
  }

  &.active {
    color: #0000ff;
  }
`;
const Subtitles = styled.span`
  font-size: 35px;
  font-family: "Edu SA Beginner", cursive;
`;

export default SideBar;
