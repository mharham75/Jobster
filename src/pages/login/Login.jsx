import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form">
        <form>
          <label for="email">Email</label>
          <input id="email" name="email" required />
          <label for="password">Password</label>
          <input id="password" name="password" required type="password" />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="redirect-form">
        <p>Not a member yet ? </p>
        <Link to='/register' className="register-link">Register</Link>
      </div>
    </div>
  );
};

export default Login;
