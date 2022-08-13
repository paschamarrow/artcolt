import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

// import {useAuth0} from '@auth0/auth0-react';
export const FeedContext = createContext({});

const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);

  const [email, setEmail] = useState(null);

  //we need to get the current url
  // console.log("useParams", useParams())
  const { userId } = useParams();

//to do
// /home is the url
// posts feed needs to show all posts
//this context will be responsible for getting all the posts in that case (line 19). 
// it needs to know whether we're on a teacher profile or if we are on the home page because that end point is for all posts not individual post based by email
// we need a boolean to check this. with this boolean, all will be well.
// when this boolean says we are on homepage, we can fetch the get all posts in our second useEffect
//the boolean needs to be in the dependency array of the second useEffect




  //first to fetch the dynamic user and make sure it changes if user changes
  useEffect(() => {
    if (!userId){
      return
    }
    fetch(`/api/get-user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.data.email);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    //writing condition for where we are here homepage or profile
    
    
    if (!email){
      return
    }
    fetch(`/api/get-mediabyemail?email=${email}`)

      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setFeed(data.data);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <FeedContext.Provider
      value={{
        feed,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
