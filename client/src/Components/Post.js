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
      <TitleDiv>{props.post.title}</TitleDiv>
      <ImageDiv><img src={props.post.url} /></ImageDiv>
      <p>{props.post.year}</p>
      <p>{props.post.materials}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleDiv = styled.h3`
font-family: 'Courier Prime', monospace;
font-size: 20px`;
const ImageDiv = styled.h3`

font-size: 20px;
img {
  max-width: 1000px;
}`;

export default Post;
