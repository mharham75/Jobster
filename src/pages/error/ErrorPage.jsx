import notFound from "./notFound.svg";

//styles
import "./error.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="image">
        <img src={notFound} alt="page not found" className="error-img" />
      </div>
      <div className="error-info">
        <h2>Ohh! Page Not found</h2>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/" className="backhome-btn">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
