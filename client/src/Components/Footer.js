import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <Upperdiv>
        <div>
          <h4>Information</h4>
          <a href="/about">About</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/membershippolicy">Membership Policy</a>
          <p>Accessibility and Usability</p>
        </div>
        <div>
          <h4>Manage Account</h4>
          <a href="/join">Join ARTCOLT</a>
          <p>FAQ</p>
          <p>Log-In</p>
          <p>Contact Support</p>
        </div>
        <div>
          <h4>Links</h4>
          <a
            href="https://www.quebec-elan.org/"
            target="_blank"
            rel="noreferrer"
          >
            ELAN QUEBEC
          </a>
          <a href="http://www.celinebureau.info/">CELINE BUREAU</a>

          <a href="http://thisispublicparking.com/">PUBLIC PARKING</a>
          <h3>
            <span>
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaTiktok />
            </span>
          </h3>
        </div>
      </Upperdiv>
      {/* <LowerDiv>
        <div>
          <select name="" id="">
            <option value="" disabled={true}>
              --Select Country--
            </option>

            <option value="canada">Canada</option>
            <option value="usa">United States</option>
          </select>
        </div>
        <div>
          <a href="instagram.com/sogekingullah/">Follow Us</a>

          <a href="instagram.com/sogekingullah/">Follow Me</a>

          <span>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
            <FaTiktok />
          </span>
        </div>
      </LowerDiv> */}
    </FooterDiv>
  );
};
const FooterDiv = styled.div`
  letter-spacing: 0.3px;
  font-family: "Helvetica", sans-serif;
  /* overflow-y: scroll; */
  width: 100vw;
  height: 300px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  color: black;
  background-image: linear-gradient(to right, white, #0000ff);
`;
const Upperdiv = styled.div`
  display: flex;
  height: 10px;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;
  color: black;
  /* box-shadow: 5px 10px #0000ff; */
  margin: 50px;
  padding: 10px;
  div h4 {
    color: #ffffff;
    font-family: "Aboreto";
    font-size: 20px;
  }
  div a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      color: #ff00ff;
    }
  }
  div p {
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-size: 14px;
    &:hover {
      color: #ff00ff;
    }
  }
  div {
    display: flex;
    flex-flow: column nowrap;
  }
  h3 {
    display: flex;
    gap: 5px;
  }
`;
// const LowerDiv = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   align-items: center;
//   padding: 5px;
//   margin: 0 40px;

//   div {
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: space-evenly;
//     align-items: center;
//     gap: 10px;
//   }
//   select {
//     outline: none;
//     border: none;
//     /* background-color: #5c60b2; */
//     color: #fff;
//     height: 28px;
//     border-radius: 5px;
//     padding: 5px;
//     letter-spacing: 0.5px;
//   }
//   span {
//     display: flex;
//     gap: 5px;
//   }
//   div a {
//     color: white;
//     text-decoration: none;
//     font-size: 14px;
//     &:hover {
//       color: #ff00ff;
//     }
//   }

export default Footer;
