import React from "react";
import styled from "styled-components";

// email: "paschamarrow@gmail.com"
// materials: "Oil, Acrylic, Chalk Pastels, Charcoal on Canvas"
// title: "Mum and Her Rock"
// url: "https://res.cloudinary.com/dwexwvttq/image/upload/v1660560287/vpx7egsnxeykntegd70w.jpg"
// year: "2018"

const Post = (props) => {
  return (
    <Wrapper>
      <p>{props.post.title}</p>
      <img src={props.post.url} />
      <p>{props.post.year}</p>
      <p>{props.post.materials}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Post;
