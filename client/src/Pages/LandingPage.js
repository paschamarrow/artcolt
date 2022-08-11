import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const LandingPage = () => {
  const {
    state: { homeFeed },
  } = useContext(UserContext);
  console.log("homeFeed,", homeFeed);

  return (
    <Wrapper>
      {homeFeed &&
        homeFeed.map((post) => {
          return (
            <>
              <p>{post.title}</p>
              <img style={{width:"100px"}} src={post.url} />
            </>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-size: 20px;
`;

export default LandingPage;
