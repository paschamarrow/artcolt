import { createContext, useReducer } from "react";
export const UserContext = createContext(null);

const initialState = {
  allUsers: null,
  setAllUsers: null,
  newUser: {},
};

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    // case "receive-user-info-from-server": {
    //   return {
    //     ...state,
    //     currentUser: action.currentUser,
    //     status: "idle",
    //   };
    // }
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
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [currentUser, setCurrentUser] = useState({});
  // const [error, setError] = useState(false);
  // const [homeFeed, setHomeFeed] = useState(null);

  // const receiveUserInfoFromServer = (data) => {
  //   dispatch({
  //     type: "receive-user-info-from-server",
  //     ...data,
  //   });
  // };

  // useEffect(() => {
  //   fetch("/api/me/profile")
  //     .then((something) => something.json())
  //     .then((data) => {
  //       setCurrentUser(data);
  //       receiveUserInfoFromServer(data);
  //     });
  // }, []);

  const getUsers = (data) => {
    dispatch({
      type: "get-users",
      data,
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

  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          addUser,
          getUsers,
          
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
