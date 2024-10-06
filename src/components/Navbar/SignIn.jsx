import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="user-pass">
      <div className="holder-sign-in animate__animated animate__fadeInDown">
        <h2 className="sign-in-header">Sign In</h2>
        <div className="container">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
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