import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import Footer from "../Components/Footer";

const SignUp = () => {
  const { state } = useLocation();

  const [uploadedFile, setUploadedFile] = useState();
  const {
    actions: { addUser },
  } = useContext(UserContext);

  const navigate = useNavigate();

  /**
   * Go to the navigate page
   * creates new order and handles it in context
   * @param {*} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileData = new FormData();
    fileData.append("file", uploadedFile[0]);
    fileData.append("upload_preset", "artcolt");

    fetch("https://api.cloudinary.com/v1_1/dwexwvttq/image/upload", {
      method: "POST",
      body: fileData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const newUser = {
          firstName: e.target[0].value,
          lastName: e.target[1].value,
          location: e.target[2].value,
          email: e.target[3].value,
          bio: e.target[4].value,
          statement: e.target[5].value,
          avatarSrc: data.secure_url,
        };
        addUser(newUser);
      });

    navigate("/signin");
  
  };



  return (
    <Wrapper>
    <Position onSubmit={handleSubmit}>
      <H1>JOIN ARTCOLT</H1>
      <Contain>
        <Input type="text" placeholder="First Name" required />
        <Input type="text" placeholder="Last Name" required />
        <Input type="text" placeholder="City Location" required />
        <Input type="email" placeholder="Email" required />
        <Input type="text" placeholder="Bio" required />
        <Input type="text" placeholder="Teaching Statement" required />
        <span><Input
          type="file" 
          onChange={(e) => {
            setUploadedFile(e.target.files);
          }} 
        />
        Profile Image</span>
        <Submit type="submit" value="Confirm Sign-Up" />
      </Contain>
      
    </Position>
    <Footer/>
    </Wrapper>
   
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 900 px;
 
`;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const H1 = styled.h1`
   font-family: 'Lexend', sans-serif;
  font-weight: lighter;
`;
const Contain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 800px;
  font-family: "Arial";
  font-weight: lighter;
  margin-bottom: 20px;
  background-image: linear-gradient(to right, white, #D0D2FF);
`;
const Input = styled.input`
  height: 40px;
  border-radius: 1px;
  border-color: lightgrey;
  border-width: 1px;
  font-family: "Arial";
  font-size: 17px;
  font-weight: lighter;
  font-family: "Lexend", sans-serif;
  &:focus {
    outline: 2px solid #0000ff;
    border-radius: 1px;
  }
`;
const Submit = styled.input`
  background-color: #0000ff;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 1px;
  height: 40px;
  width: 800px;
  font-family: "Arial";
  font-weight: lighter;
  font-size: 18px;
  font-family: "Lexend", sans-serif;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FF00FF;
    transition: 0.7s;
  }
`;

export default SignUp;
