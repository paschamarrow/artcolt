import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Components/Loading";

const LandingPage = () => {
  const {
    state: { homeFeed },
  } = useContext(UserContext);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  console.log(user);

  return (
    <Wrapper>
      <Contain>
        {homeFeed ? (
          homeFeed.map((post) => {
            return (
              <>
                <FeedBox>
                  <PostTitle>{post.title}</PostTitle>
                  <Name>{post.lastName}</Name>
                  <Img src={post.url} />
                </FeedBox>
              </>
            );
          })
        ) : (
          <Loading />
        )}
      </Contain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-y: scroll; */
  /* border: 4px solid green; */
  padding: 20px;
  margin: 20px;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* height: 350px; */
  font-size: 14px;
  font-family: "Kosugi", Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;
  width: 2000px;
  opacity: 0.9;
  padding: 44px;
  /* border-radius: 20px; */
  /* border-top: 3px solid #0000ff; */
  /* border-right: none; */
  /* background-color:#5C60B2; */
  box-shadow: 5px 10px #d0d2ff;
  border-bottom: 3px solid #0000ff;
`;
const FeedBox = styled.div`
  display: flex;
  width: 200px;
  height: fit-content;
  margin: 25px;
  &:hover {
    font-weight: bold;
  }
`;
const PostTitle = styled.p`
  font-family: "Helvetica";
  font-weight: lighter;
  font-size: 10px;
  position: relative;
  top: -10px;
`;
const Img = styled.img`
  width: 300px;
  height: fit-content;
  margin-bottom: 10px;
  &:hover {
    height: fit-content;
    width: 400px;
  }
`;

const Name = styled.div``;
export default LandingPage;
