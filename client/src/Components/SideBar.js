import React from "react";
import styled from "styled-components";
import {
  GiJungle,
  GiAbstract079,
  GiAndromedaChain,
  GiAnchor,
} from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import test from "../styleimages/3layerscrop.jpg";
const SideBar = () => {
  return (
    <BarWrapper>
      <Links to={{ pathname: "/teachers/:userId" }}>
        <Iconspan>
          {" "}
          <GiAnchor />{" "}
        </Iconspan>
        <Subtitles>PROFILE</Subtitles>
      </Links>
      <Links to={{ pathname: "/teachers" }}>
        <Iconspan>
          <GiJungle />
        </Iconspan>
        <Subtitles>ALL USERS</Subtitles>
      </Links>
      <Links to={{ pathname: "/bookmarks/" }}>
        <Iconspan>
          <GiAndromedaChain />
        </Iconspan>
        <Subtitles>FOLLOWING</Subtitles>
      </Links>
    </BarWrapper>
  );
};

const BarWrapper = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 20px;
  margin-right: 150px;
  margin-left: 50px;
 
  padding-top: 20px;
  padding-right: 20px;
  max-width: px;
  border-radius: 40px;
  border: 3px solid #0000ff;
  box-shadow: 5px 10px #0000ff;
  /* background-image: {test}; */
`;
const Iconspan = styled.span`
  padding: 2px;
  width: 40px;
`;
const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  height: 30px;
  align-items: center;
  padding: 5px 15px;

  &:hover {
    background-color: #0000ff;
    color: white;
    border-radius: 20px;
  }

  &.active {
    color: #ff00ff;
  }
`;
const Subtitles = styled.span`
  font-family: Helvetica;
`;

export default SideBar;
