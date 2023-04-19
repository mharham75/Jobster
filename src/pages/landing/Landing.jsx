import logo from "./logo.svg";
import main from "./main.svg";

//styles
import './landing.scss'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="header-title">
        <img src={logo} alt="jobster logo" />
      </div>
      <section className="hero-section">
        <div className="description">
          <h1>Job Tracking App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consequatur odio iure cum labore, velit, voluptatibus quas adipisci
            voluptate ad sit architecto. Provident dignissimos fugit expedita
            animi ut cum veritatis.
          </p>
          <Link to='/register' className="login-register">Login/Register</Link>
        </div>
        <div className="img">
          <img src={main} alt="jobster " />
        </div>
      </section>
    </>
  );
};

export default Landing;
