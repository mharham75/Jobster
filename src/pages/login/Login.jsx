import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginThunk } from "../../redux/actions/userLoginAction";

//styles
import "./login.scss";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginUserDetails, setLoginUserDetails] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e?.target;

    setLoginUserDetails({
      ...loginUserDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const { email, password } = loginUserDetails;

    if (!email || !password) {
      toast.warning("please fill both the fields");
      return;
    } else {
      dispatch(userLoginThunk(loginUserDetails));
    }
  };

  const navigate = useNavigate();

  useEffect( () => {
    const _user = getUserFromLocalStorage()
    console.log(_user,'user')
    if(_user){
      navigate('/dashboard')
    }
  },[navigate])

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            // value={loginUserDetails?.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            // value={loginUserDetails?.password}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="redirect-form">
        <p>Not a member yet ? </p>
        <Link to="/register" className="register-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
