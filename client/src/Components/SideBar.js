import React from 'react'
import styled from "styled-components";
import { GiJungle, GiAbstract079 , GiAndromedaChain } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const SideBar = () => {


  return (
    
    <BarWrapper>
     
      <Links to={{ pathname: "/teachers/" }}>
      <Iconspan> <GiJungle /> </Iconspan>
        <Subtitles>ALL USERS</Subtitles>
      </Links>
      <Links to={{ pathname: "/notifications/" }}>
      <Iconspan><GiAbstract079 /></Iconspan>
        <Subtitles>N E W</Subtitles>
      </Links>
      <Links to={{ pathname: "/bookmarks/" }}>
      <Iconspan><GiAndromedaChain/></Iconspan>
        <Subtitles>F O L L O W I N G</Subtitles>
      </Links>
    </BarWrapper>
    
  );
};

const BarWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 20px;
  margin-right: 150px;
  font-weight: bold;
  padding-top: 20px;
  max-width: 800px;
  border: 2px solid black;
  border-radius: 4px;
`;
const Iconspan = styled.span`
padding: 2px;`;
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
    color: #FF00FF;
  }
`;
const Subtitles = styled.span`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`;



export default SideBar;