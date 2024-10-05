import "./SignIn.css";

export default function SignIn() {
  return (
    <div>
      <div className="user-pass">
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
          <button>Log In</button>
          <a>Don't have an account? Sign up!</a>
        </div>
      </div>
    </div>
  );
}
