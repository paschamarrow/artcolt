import React from "react";
// import ResponsiveEmbed from "react-responsive-embed";
import styled, {keyframes} from "styled-components";
import backdrop from "../styleimages/reflectimage.jpg";
import landingimage from "../styleimages/3layerscrop.jpg";
import Paschaimage from "../styleimages/islands.jpg";
import jeromeimage from "../styleimages/jerome1.png";
import beaimage from "../styleimages/Inward.jpg";
import zinniaimage from "../styleimages/Farzana.jpg";
import sarahimage from "../styleimages/SarahPupo.jpg";
const LandingPage = () => {
  return (
    <Wrapper>
      
      <Div>
      <InfiniteScroll>
      <StyledImage src={backdrop} />
        </InfiniteScroll>
        <InfiniteScroll2>
        <StyledImage src={landingimage} />
        </InfiniteScroll2>
        <InfiniteScroll3>
        <StyledImage src={Paschaimage} />
        </InfiniteScroll3>
        <InfiniteScroll4>
        <StyledImage src={jeromeimage} />
        </InfiniteScroll4>
        <InfiniteScroll5>
        <StyledImage src={beaimage} />
        </InfiniteScroll5>
        <InfiniteScroll6>
        <StyledImage src={zinniaimage} />
        </InfiniteScroll6>
        <InfiniteScroll7>
        <StyledImage src={sarahimage} />
          </InfiniteScroll7>
        
      </Div>
    </Wrapper>
  );
};
const Div = styled.div`
  width: 100%;
 
  /* height: 50px; */
  margin-top: 35px;
  z-index: 2;
  position: fixed;
  padding-top: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-size: 20px;
`;
const StyledImage = styled.img`
    width: 100%;
 
 height: 100%;
 margin-top: 35px;
 z-index: 2;
 position: fixed;
 /* padding-top: 10px; */

`;
const scroll = keyframes`
    0% {transform: translateX(3500px);}
    25%{transform: translateX(2000px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-2000px)}
    100% {transform: translateX(-4000px);}
`;

const scroll2 = keyframes`
    0% {transform: translateX(1000px);}
    25%{transform: translateX(-1000px)}
    50%{transform: translateX(-3000px)}
    75%{transform: translateX(-5000px)}
    100% {transform: translateX(-5000px);}
`;

const InfiniteScroll = styled.div`
  position: absolute;
  background-color: #0000ff;
  margin-top: 10px;
  width: 600px;
  height: 600px;
  animation: ${scroll} 40s linear infinite;
`;

const InfiniteScroll2 = styled.div`
  background-color: #0000ff;
  position: absolute;
  width: 600px;
  height: 600px;
  margin-top: 10px;
  animation: ${scroll2} 40s linear infinite;
`;

const InfiniteScroll3 = styled.div`
  background-color: #0000ff;
  position: absolute;
  width: 600px;
  height: 600px;
  margin-top: 10px;
  animation: ${scroll2} 40s linear infinite;`;

const InfiniteScroll4 = styled.div`
background-color: #0000ff;
position: absolute;
width: 600px;
height: 600px;
margin-top: 10px;
animation: ${scroll2} 40s linear infinite;`;

const InfiniteScroll5 = styled.div`
background-color: #0000ff;
position: absolute;
width: 600px;
height: 600px;
margin-top: 10px;
animation: ${scroll2} 40s linear infinite;`;

const InfiniteScroll6 = styled.div`
background-color: #0000ff;
position: absolute;
width: 600px;
height: 600px;
margin-top: 10px;
animation: ${scroll2} 40s linear infinite;`;

const InfiniteScroll7 = styled.div`
background-color: #0000ff;
position: absolute;
width: 600px;
height: 600px;
margin-top: 10px;
animation: ${scroll2} 40s linear infinite;`;





export default LandingPage;
