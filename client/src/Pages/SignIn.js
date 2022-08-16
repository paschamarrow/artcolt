import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import LogIn from "../Auth0/LogIn";
import Logout from "../Auth0/LogOut";
import SignUpButton from "../Components/SignUpButton";



const SignIn = () => {
  const { state } = useLocation();

  const {
    actions: { getUser },
  } = useContext(UserContext);

  const navigate = useNavigate();

  /**
   * Go to the navigate page
   * creates new order and handles it in context
   * @param {*} e
   */
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/Home");
    const user = {
      email: e.target[0].value,
      password: e.target[2].value,
    };
    getUser(user);
  };

  /**
   * Handles authentication of password or confirmation of email in databa
   */
  //   const LoginButton = () => {
  //  const {loginWithRedirect} = useAuth0()

  return (
   
    <> <LogIn /> <Logout /> 
    <p><SignUpButton /></p> </>
    

    
      
  );
};


const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
`;
const Contain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  margin-bottom: 20px;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 1px;
  border-color: #0000ff;
  border-width: 1px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: lighter;
  &:focus {
    outline: 2px solid #ff00ff;
    border-radius: 1px;
  }
`;
const Submit = styled.input`
  background-color: #0000ff;
  border: none;
  border-radius: 1px;
  height: 40px;
  width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  font-size: 18px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #ff00ff;
    transition: 0.7s;
  }
`;

export default SignIn;
