import { isPlatform } from "@ionic/react";

export const domain = "dev-k06m4tj63mxsbfkn.us.auth0.com";
export const clientId = "trQ9MHfMLRCASoqcHxoiw1XSeyBI6ko8";
const appId = "flowers.ionic";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:8100/';