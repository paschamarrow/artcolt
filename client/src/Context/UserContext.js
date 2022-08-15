import { createContext, useReducer, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = createContext(null);

const initialState = {
  allUsers: null,
  newUser: {},
  homeFeed: [],
  loggedInUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-user": {
      return {
        ...state,
        newUser: action.data,
      };
    }
    case "get-users": {
      return {
        ...state,
        allUsers: action.data,
      };
    }
    case "get-user": {
      return {
        ...state,
        user: action.data,
      };
    }
    case "get-homeFeed": {
      return {
        ...state,
        homeFeed: action.data,
      };
    }
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [allPosts, setAllPosts] = useState(null);
  // const [allUsers, setAllUsers] = useState(null);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  //useEffect

  console.log("user", user);
  const getUsers = (data) => {
    dispatch({
      type: "get-users",
      data,
    });
  };

  const getHomeFeed = (data) => {
    console.log("here", data);
    dispatch({
      type: "get-homeFeed",
      data,
    });
  };

  const getUser = (data) => {
    dispatch({
      type: "get-user",
      ...data,
      //is data spread here for single user or is single user an array too?
    });
  };
  const addUser = (data) => {
    fetch("/api/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch({
      type: "add-user",
      data,
    });
  };

  const setError = () => {
    //to do
  };

  //   useEffect(() => {
  //     if(isAuthenticated){
  //     fetch(`/api/userByEmail/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setLoggedInUser(data.data);
  //     })
  //     .catch((err) => console.log("err", err))}
  // }, [user])

  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          addUser,
          getUsers,
          getUser,
          setError,
          getHomeFeed,
          
        },
        loggedInUser, setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
