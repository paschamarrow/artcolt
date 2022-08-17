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
      <ImageDiv>
        <img src={props.post.url} />
      </ImageDiv>
      <MaterialsLabel>
      <p>{props.post.year}</p>
      <p>{props.post.materials}</p>
      </MaterialsLabel>
     
      {props.selectedPostartist && (
        <p>
          {props.selectedPostartist.firstName +
            " " +
            props.selectedPostartist.lastName}
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
 width: 600px;
  margin-left: 60px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  & background-color {
    opacity: 50%;
  }

  img {
    width: 400px;
    align-self: left;
    border: 0.5px dashed black;
  }`;

const TitleDiv = styled.h3`
  font-family: "Courier Prime", monospace;
  font-size: 20px;
  margin-right: 10px;
  margin-top: 40px;
`;
const ImageDiv = styled.h3`
  font-size: 20px;
  img {
    max-width: 1000px;
  }
  p {
    font-family:"Courier Prime", monospace;
  }
`;
const MaterialsLabel = styled.div`
font-family:"Courier Prime", monospace;
margin-left: 10px;
margin-top:30px;
`;

export default Post;
