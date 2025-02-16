import { useState } from "react";
import "../css/loginregister.css";

export const LoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container">
      <div id="login-register">
        <div id="box">
          <input 
            type="checkbox" 
            id="sign-up-toggle" 
            checked={isSignUp}
            onChange={() => setIsSignUp(true)}
          />
          <input 
            type="checkbox" 
            id="login-toggle" 
            checked={!isSignUp}
            onChange={() => setIsSignUp(false)}
          />
          <label htmlFor="sign-up-toggle">Sign Up</label>
          <label htmlFor="login-toggle">Login</label>
          <div id="login-panel">
                <form>
                {isSignUp && <input type="text" placeholder="First Name" />}
                {isSignUp && <input type="text" placeholder="Last Name" />}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                </form>
                <button>
                <p>{isSignUp ? "Sign Up" : "Login"}</p>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};