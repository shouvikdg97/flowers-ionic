import React from "react";
import { createRoot} from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { domain as auth0Domain, clientId, callbackUri } from "./auth.config";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUri
      }}
      // For using Auth0-React with Ionic on Android and iOS,
      // it's important to use refresh tokens without the fallback
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);