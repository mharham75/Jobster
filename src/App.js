//
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ErrorPage from "./pages/error/ErrorPage";
import Dashboard from "./dashboard/Dashboard";

//styles
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ToastContainer position="top-center" />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
