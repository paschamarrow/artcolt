import { createContext, useReducer, useEffect, useState } from "react";
export const CurrentUserContext = createContext(null);

const initialState = {
  currentUser: null,
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-user-info-from-server": {
      return {
        ...state,
        currentUser: action.currentUser,
        status: "idle",
      };
    }
    default:
      throw new Error(`user-not-found: ${action.type}`);
  }
};

export const CurrentUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentUser, setCurrentUser] = useState({});
//   const [newTweet, setNewTweet] = useState(false);
  const [error, setError] = useState(false);

  const [homeFeed, setHomeFeed] = useState(null);

  const receiveUserInfoFromServer = (data) => {
    dispatch({
      type: "receive-user-info-from-server",
      ...data,
    });
  };

  useEffect(() => {
    fetch("/api/me/profile")
      .then((something) => something.json())
      .then((data) => {
        setCurrentUser(data);
        receiveUserInfoFromServer(data);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        homeFeed,
        setHomeFeed,
        currentUser,
        setCurrentUser,
        error,
        setError,
        state,
        actions: {
          receiveUserInfoFromServer,
        },
        
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
