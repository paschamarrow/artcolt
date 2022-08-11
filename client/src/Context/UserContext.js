import { createContext, useReducer } from "react";
export const UserContext = createContext(null);

const initialState = {
  allUsers: null,
  setAllUsers: null,
  newUser: {},
  homeFeed: [],
  //notsure if line 7 is correct
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

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  // useEffect(() => {
  //   fetch("/api/get-users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getUsers(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
