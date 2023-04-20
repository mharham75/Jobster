import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../../redux/actions/userRegister";

//styles
import "./register.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [userdetails, setUserDetails] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e?.target;

    setUserDetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = userdetails;

    if (!name || !email || !password) {
      toast.error("Please fill out all the fields");
    } else {
      dispatch(userRegisterThunk(userdetails));
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="redirect-form">
        <p>Alreay a member? </p>
        <Link to="/login" className="register-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
