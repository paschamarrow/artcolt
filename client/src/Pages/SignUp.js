import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const SignUp = () => {
  const { state } = useLocation();

  const {
    actions: { addUser },
  } = useContext(UserContext);

  const navigate = useNavigate();

  /**
   * Go to the navigate page
   * creates new order and handles it in context
   * @param {*} e
   */
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/SignIn");
    const newUser = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      location: e.target[2].value,
      email: e.target[3].value,
      bio: e.target[4].value,
      statement: e.target[5].value,
    };
    addUser(newUser);
  };

  /**
   * Deletes all the items in the cart
   */
  // const handleAddUser = () => {
  //     fetch("/api/cart/delete-all", {
  //         method: "DELETE",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //     });
  // };

  return (
    <Position onSubmit={handleClick}>
      <H1>Enter Account Information</H1>
      <Contain>
        <Input type="text" placeholder="First Name" required />
        <Input type="text" placeholder="Last Name" required />
        <Input type="text" placeholder="City Location" required />
        <Input type="email" placeholder="Email" required />
        <Input type="text" placeholder="Bio" required />
        <Input type="text" placeholder="Teaching Statement" required />
        <Submit type="submit" value="Confirm Sign-Up" />
      </Contain>
    </Position>
  );
};

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const H1 = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: lighter;
`;
const Contain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: lighter;
  margin-bottom: 20px;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 1px;
  border-color: lightgrey;
  border-width: 1px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  font-weight: lighter;
  &:focus {
    outline: 2px solid #e3c4a6;
    border-radius: 1px;
  }
`;
const Submit = styled.input`
  background-color: #e3c4a6;
  border: none;
  border-radius: 1px;
  height: 40px;
  width: 500px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: lighter;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #ebdbcc;
    transition: 0.7s;
  }
`;

export default SignUp;
