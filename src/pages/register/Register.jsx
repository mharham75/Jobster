import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <div className="form">
        <form>
          <label for="name">name</label>
          <input id="name" name="name" required />
          <label for="email">Email</label>
          <input id="email" name="email" required />
          <label for="password">Password</label>
          <input id="password" name="password" required type="password" />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="redirect-form">
        <p>Alreay a member? </p>
        <Link to='/login' className="register-link">Login</Link>
      </div>
    </div>
  );
};

export default Register;
