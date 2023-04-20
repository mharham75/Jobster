//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ErrorPage from "./pages/error/ErrorPage";
import Dashboard from "./dashboard/Dashboard";
import store from "./redux/store";

//styles
import "./App.css";
import Stats from "./dashboard/stats/Stats";
import AddJobs from "./dashboard/add-jobs/AddJobs";
import AllJobs from "./dashboard/all-jobs/AllJobs";
import Profile from "./dashboard/profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<Stats />}/>
              <Route path='addjob' element={<AddJobs />}/>
              <Route path='alljobs' element={<AllJobs />}/>
              <Route path="profile" element={<Profile />}/>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ToastContainer position="top-center" />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
