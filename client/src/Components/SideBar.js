import React from "react";
import styled from "styled-components";
import {
  GiJungle,
  GiAbstract079,
  GiAndromedaChain,
  GiAnchor,
} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import profileimage from "../styleimages/profileheader.jpg";
import allusers from "../styleimages/allusers.jpg";
import homelabel from "../styleimages/home.jpg";

// import test from "../styleimages/3layerscrop.jpg";
const SideBar = () => {
  return (
    <BarWrapper>
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
      <Links to={{ pathname: "/home" }}>
       
        <Subtitles>
          <span> HOME </span>
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
  /* border-radius: 40px; */
  /* border: 3px solid #0000ff; */
  box-shadow: 5px 10px #D0D2FF;
  height:200px;
  width: 1040px;
  margin-right: 150px;
  margin-left: 50px;
  font-family: Arial, Helvetica, sans-serif;
  /* background-color: #d0d2ff; */
  padding-top: 20px;
  padding-right: 20px;
  
`;
const Iconspan = styled.span`
  padding: 2px;
  width: 40px;
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
/* font-family: "Aboreto"; */
 font-size: 30px;
 font-family: 'Lexend', sans-serif;

`;

export default SideBar;
