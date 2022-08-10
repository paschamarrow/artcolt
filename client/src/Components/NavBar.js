import React from "react";
import { Link } from "react-router-dom";
import { APPNAME } from "../Styles/GlobalVariables";
import styled from "styled-components";
import { GoSignIn } from "react-icons/go";


const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    
  };

  return (
    <>
      <Contain>
        
        {/* <Link to="/" style={linkStyle} 
        <Logo src={logo} alt="" />  */}
        <Link to="/Home" style={linkStyle}>
          <H1>{APPNAME}</H1>
          
        </Link>
        <H2 style={{ marginBottom: "67px" }}>how to do art?</H2>
        <IconWrapper>
        {/* <Link to="/" style={linkStyle}>
          <GiAnchor size="25px" style={{ marginBottom: "55px" }} /> */}
          {/* <Subtitles>H O M E</Subtitles> */}
        {/* </Link> */}
        <Link to="/SignIn" style={linkStyle}>
          <GoSignIn size="25px" style={{ marginBottom: "55px" }} />
        </Link>
        </IconWrapper>
      </Contain>
    </>
  );
};

const Contain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 200px;
  gap: 20px;
`;

const IconWrapper = styled.div`
display: flex;
flex-direction: row;

`;
const H1 = styled.h1`
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 60px;
  margin-bottom: 115px;
  color: #0000ff;
`;
const H2 = styled.h1`
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: 115px;
  color: #0000ff;
`;

export default NavBar;
