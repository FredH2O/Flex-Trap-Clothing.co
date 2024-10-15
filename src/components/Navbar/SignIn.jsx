import { useEffect, useState } from "react";
import "./SignIn.css";

export default function SignIn({ signIn }) {
  const [animate, setAnimate] = useState("animate__fadeInDown");

  useEffect(() => {
    setAnimate(signIn ? "animate__fadeInDown" : "animate__fadeOutUp");
  }, [signIn]);
  return (
    <div className="user-pass">
      <div className={`holder-sign-in animate__animated ${animate}`}>
        <h2 className="sign-in-header">Sign In</h2>
        <div className="container">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="login-signup">
            <button className="btn btn-success">Log In</button>
            <a className="link-info" href="#!">
              Don't have an account? Sign up!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
