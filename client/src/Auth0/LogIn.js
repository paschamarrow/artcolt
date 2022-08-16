import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonWrapper>
      <LoginButton
        onClick={() =>
          loginWithRedirect({ redirect_uri: "http://localhost:3000/home" })
        }
      >
        Log In
      </LoginButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButton = styled.button`
  /* font-family: "Arial"; */
  font-family: 'Lexend', sans-serif;
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
export default Login;
