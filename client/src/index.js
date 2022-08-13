import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";
import "./fonts/cyen/Cyen.ttf";
// import "./fonts/obgb/OBGB.ttf";
// import "./fonts/theboldfont/THEBOLDFONT2022.ttf";
// import "./fonts/theboldfont/THEBOLDFONT.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Auth0Provider
    domain="dev-vmu-pgt1.us.auth0.com"
    clientId="G45fog1WMlB8Yo2n22RRV0vCnZSrMMpd"
    redirectUri={"http://localhost:3000/"}
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Auth0Provider>
);
