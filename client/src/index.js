import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import {Auth0Provider} from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
  domain="dev-vmu-pgt1.us.auth0.com"
  clientId="G45fog1WMlB8Yo2n22RRV0vCnZSrMMpd"
  redirectUri={window.location.origin}
  >
  <UserProvider>
    <App />
  </UserProvider>
  </Auth0Provider>
);
