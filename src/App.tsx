import "./App.css";
import { usePasswordless } from "../src/components/client/react/index.ts";
import StepUpAuth from "./StepUpAuth";
import { useState } from "react";

function App() {
  const {
    signOut,
    signInStatus,
    showAuthenticatorManager,
    toggleShowAuthenticatorManager,
    tokensParsed,
  } = usePasswordless();

  const [showStepUpAuth, setShowStepUpAuth] = useState(false);
  if (showStepUpAuth && signInStatus !== "SIGNED_IN") setShowStepUpAuth(false);

  return (
    <div className="app">
      <div>This YOUR app</div>
      <div>Hi there {tokensParsed?.idToken.email}</div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
      <button
        onClick={() => toggleShowAuthenticatorManager()}
        disabled={showAuthenticatorManager}
      >
        Manage authenticators
      </button>
      {showStepUpAuth ? (
        <StepUpAuth />
      ) : (
        <button onClick={() => setShowStepUpAuth(true)}>
          Show Step Up Auth
        </button>
      )}
    </div>
  );
}

export default App;
