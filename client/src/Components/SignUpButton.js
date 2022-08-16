import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <ButtonWrapper>
      <SignUButton onClick={handleClick}>Sign Up</SignUButton>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const SignUButton = styled.button`
  /* font-family: "Arial"; */
  font-family: "Lexend", sans-serif;
  font-size: 26px;
  /* font-style: italic; */
  color: black;
  width: 150px;
  height: 80px;
  background-color: #ffffff;
  border: 10px solid #d0d2ff;
  cursor: pointer;
  &:hover {
    background-color: #ff00ff;
    opacity: 70%;
    color: #0000ff;
    border-radius: 20px;
  }
`;
export default SignUpButton;
