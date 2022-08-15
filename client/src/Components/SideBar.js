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
      <Links to={{ pathname: "/teachers/me" }}>
        {/* <Iconspan> */}
        {/* {" "}
          <GiAnchor />{" "} */}
        {/* </Iconspan> */}
        <Subtitles>
          <img src={profileimage} />
        </Subtitles>
      </Links>
      <Links to={{ pathname: "/teachers" }}>
        {/* <Iconspan> */}
        {/* <GiJungle /> */}
        {/* </Iconspan> */}
        <Subtitles>
          <img src={allusers} />
        </Subtitles>
      </Links>
      <Links to={{ pathname: "/home" }}>
        {/* <Iconspan>
          <GiAndromedaChain /> */}
        {/* </Iconspan> */}
        <Subtitles>
          <img src={homelabel} />
        </Subtitles>
      </Links>
    </BarWrapper>
  );
};

const BarWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-radius: 40px; */
  /* border: 3px solid #0000ff; */
  box-shadow: 5px 10px #0000ff;
  height: 200px;
  width: 150px;
  margin-right: 150px;
  margin-left: 50px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #d0d2ff;
  padding-top: 20px;
  padding-right: 20px;
  /* width: 300px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: "Tangerine";
  font-size: 20px;
  margin-right: 150px;
  margin-left: 50px;
 background-color: #ffffff;
  padding-top: 20px;
  padding-right: 20px;
  max-width:  */
  /* border-radius: 40px; */
  /* border: 3px solid #0000ff; */
  /* box-shadow: 5px 10px #0000ff; */
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
  height: 40px;
  align-items: left;
  padding: 5px 15px;

  &:hover {
    background-color: #d0d2ff;
    color: black;
    border-radius: 20px;
  }

  &.active {
    color: #ff00ff;
  }
`;
const Subtitles = styled.span`
  font-family: Helvetica;
  img {
    width: 100px;
    align-self: left;
  }
`;

export default SideBar;
