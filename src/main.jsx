import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Passwordless } from "../src/components/client/index.ts";
import {
  PasswordlessContextProvider,
  Passwordless as PasswordlessComponent,
  Fido2Toast,
} from "../src/components/client/react/index.ts";
// import "amazon-cognito-passwordless-auth/passwordless.css";
// import "@cloudscape-design/global-styles/index.css";


Passwordless.configure({
  cognitoIdpEndpoint: import.meta.env.VITE_COGNITO_IDP_ENDPOINT,
  clientId: import.meta.env.VITE_CLIENT_ID,

  debug: console.debug,
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <PasswordlessContextProvider enableLocalUserCache={true}>
    <PasswordlessComponent
      brand={{
        customerName: "Amazon Web Services",
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PasswordlessComponent>
    <Fido2Toast /> {/* Add Fido2Toast below App so it is rendered on top */}
  </PasswordlessContextProvider>
)
