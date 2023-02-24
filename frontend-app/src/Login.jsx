import React, { useState } from "react";
// import jwt from "jwt-decode";
import { HomePage } from "./HomePage";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [authState, setAuthState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // so that page doesn't load again and we don't lose our values
    // setIsLoggedIn(true);
  };

  const handleLogin = () => {
    // const token = jwt.sign({ email }, "secretkey", { expiresIn: "1m" });
    // blocking server call which will call the API(email, password)= in response we will get the json web token,
    let token = "logged-in";
    localStorage.setItem("token", token);
    // app-navigate to Home Page, or change the state(redux)- no need to pass the props
    setTimeout(() => {
      // localStorage.removeItem("token"); Add a log out button and then remove the token from local storage
      // setIsLoggedIn(false);
    }, 60000);
  };

  return (
    <div className="auth-form-container">
      {!localStorage.getItem("token") ? (
        <div>
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            ></input>
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            ></input>
            <button onClick={handleLogin} type="submit">
              Log In
            </button>
          </form>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here
          </button>
        </div>
      ) : (
        <HomePage homeProp={email}></HomePage>
      )}
    </div>
  );
};
