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
                    <a href="/join">Join Now</a>
                    <a href="/tour">Take A Tour</a>
                    <p>FAQ</p>
                    <p>Log-In</p>
                   
                </div>
                <div>
                    <h4>News </h4>
                    <a href="/signup">Newsletter sign up</a>
                    <a href="https://www.parl.ca/DocumentViewer/en/44-1/bill/C-27/first-reading">
                        Canada's Consumer Privacy Act
                    </a>
                 
                    
                </div>
             
                <div>
                    <h4>News & Info</h4>
                    <p>Press Releases</p>
                 
                  
                    
                </div>
                <div>
                    <h4>Other Sites</h4>
                    <a
                        href="https://www.quebec-elan.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ELAN QUEBEC
                    </a>
                    
                </div>
            </Upperdiv>
            <LowerDiv>
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
            </LowerDiv>
        </FooterDiv>
    );
};
const FooterDiv = styled.div`
    letter-spacing: 0.3px;
    font-family: "Helvetica", sans-serif;

    height: 270px;
    overflow-y: scroll;
    width: 100vw;

    height: 280px;
    width: 100%;

    background-color: #0000ff;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
`;
const Upperdiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-bottom: 20px;
    div h4 {
        color: #ccc;
    }
    div a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        &:hover {
            color: #FF00FF;
        }
    }
    div p {
        cursor: pointer;
        padding: 0;
        margin: 0;
        font-size: 14px;
        &:hover {
            color: #cccd;
        }
    }
    div {
        display: flex;
        flex-flow: column nowrap;
    }
`;
const LowerDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin: 0 40px;
    div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }
    select {
        outline: none;
        border: none;
        background-color: #5C60B2;
        color: #fff;
        height: 28px;
        border-radius: 5px;
        padding: 5px;
        letter-spacing: 0.5px;
    }
    span {
        display: flex;
        gap: 5px;
    }
    div a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        &:hover {
            color: #cccd;
        }
    }
`;
export default Footer;
