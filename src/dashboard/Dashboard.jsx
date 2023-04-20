import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../utils/localStorage";

const Dashboard = () => {
  let _user = getUserFromLocalStorage();
  const navigate = useNavigate()

  const handleLogout = () => {
    removeUserFromLocalStorage();
    navigate('/login')
  }

  return (
    <>
      <p>Welcome to dashborad {_user?.email}</p>
      <button onClick={ () => handleLogout()}>Logout</button>
    </>
  );
};

export default Dashboard;
