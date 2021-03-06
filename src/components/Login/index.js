import React, { useState } from "react";
import "./index.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // here logged in successfuly and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create user and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login__signUpButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
