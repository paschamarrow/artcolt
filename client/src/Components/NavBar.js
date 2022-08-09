import React from 'react'
import {Link } from "react-router-dom";
import { APPNAME } from '../Styles/GlobalVariables';
import styled from "styled-components";

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
    <Link to="/" style={linkStyle}>
        <H1>{APPNAME}</H1>
    </Link>
     </Contain>
     </>
  );
}

const Contain = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 200px;
    gap: 20px;
`;

const H1 = styled.h1`
    font-family: "Helvetica";
    font-weight: lighter;
    font-size: 60px;
    margin-bottom: 115px;
    color: #0000ff;
`;



export default NavBar