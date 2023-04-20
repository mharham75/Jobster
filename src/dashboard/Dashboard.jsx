import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import logo from '../assets/images/logo.svg'

//styles
import "./dashboard.scss";

const Dashboard = () => {
  let _user = getUserFromLocalStorage();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserFromLocalStorage();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="left-section">
        <ul>
          <li>
          <img src={logo} alt="jobster logo" className="logo" />
          </li>
          <li>
            <Link to="/dashboard">Stats</Link>
          </li>
          <li>
            <Link to="/dashboard/addjob">Add Jobs</Link>
          </li>
          <li>
            <Link to="/dashboard/alljobs">All Jobs</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <main className="main">
      <nav>
        <p>Welcome to dashborad {_user?.email}</p>
        <button onClick={() => handleLogout()} className="logout-btn">
          Logout
        </button>
      </nav>
      <div className="main-section">
        <Outlet />
      </div>
      </main>
    </div>
  );
};

export default Dashboard;
