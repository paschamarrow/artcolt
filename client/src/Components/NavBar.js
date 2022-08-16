import React from "react";
import { Link } from "react-router-dom";
import { APPNAME } from "../Styles/GlobalVariables";
import styled from "styled-components";
import { GoSignIn } from "react-icons/go";
import logo from "../styleimages/logo.png";
const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <>
      <Contain>
        <Link to="/home" style={linkStyle}>
          <Logo src={logo} alt="" />
        </Link>
        <Link to="/home" style={linkStyle}>
          <H1>{APPNAME}</H1>
        </Link>

        <IconWrapper>
          <Link to="/signin" style={linkStyle}>
            <ButtonsWrapper>
              <GoSignIn
                size="35px"
                style={{ marginRight: "100px", marginTop: "120px" }}
              />
            </ButtonsWrapper>
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
  /* border-radius: 20px; */
  border-bottom: 3px solid #0000ff;

  box-shadow: 5px 10px #d0d2ff;
  margin: 50px;
  padding: 50px;
`;
const Logo = styled.img`
  width: 240px;
  margin-bottom: 20px;
`;
const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 50px;
  top: 65px;
`;
const H1 = styled.h1`
  font-family: "Aboreto";
  font-weight: lighter;
  font-size: 80px;
  margin-bottom: 70px;
  color: black;
  &:hover {
    color: #0000ff;
    border-radius: 20px;
  }
`;
const H2 = styled.h1`
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: 60px;
  color: #0000ff;
`;
const List = styled.li`
  list-style: none;
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 14px;
  /* margin-bottom: 60px; */
  color: #0000ff;
`;

const ListBox = styled.ul`
  margin-bottom: 3px;
`;

const ButtonsWrapper = styled.div`
  margin-left: 800px;
`;

export default NavBar;
