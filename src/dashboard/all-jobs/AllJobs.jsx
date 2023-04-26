//components
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobsContainer from "../jobs-component/JobsContainer";
import { allJobsThunk } from "../../redux/actions/allJobsAction";

//styles
import "./allJobs.scss";

const AllJobs = () => {
  const allJobs = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allJobsThunk());
    console.log(allJobs, "all");
  }, []);

  return (
    <>
      <div className="add-jobs">
        <h2>Search Form</h2>
        <form className="add-job-form">
          <div>
            <label htmlFor="search">Search</label>
            <input id="search" name="search" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input id="status" name="status" />
          </div>
          <div>
            <label htmlFor="job">Type</label>
            <select id="job">
              <option>full-time</option>
              <option>part-time</option>
              <option>remote</option>
              <option>internship</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort</label>
            <select id="sort">
              <option>latest</option>
              <option>oldest</option>
              <option>a-z</option>
              <option>z-a</option>
            </select>
          </div>
          <div className="btn-grp">
            <button
              type="reset"
              className="clear-btn"
              style={{ width: "100%" }}
            >
              Clear Filters
            </button>
          </div>
        </form>
      </div>
      {/* <JobsContainer /> */}
    </>
  );
};

export default AllJobs;
