//styles
import { useState } from "react";
import "./addJobs.scss";
import { useDispatch } from "react-redux";
import { addJobThunk } from "../../redux/actions/addJobAction";

const AddJobs = () => {
  const initialAddJobState = {
    position: "",
    company: "",
    jobLocation: "",
    status: "",
    jobType: "",
  };

  const [addJobDetails, setAddJobDetails] = useState(initialAddJobState);
  const dispatch = useDispatch();

  const handleAddJobChange = (e) => {
    const { name, value } = e?.target;

    setAddJobDetails({
      ...addJobDetails,
      [name]: value,
    });
  };

  const handleAddJobSubmit = (e) => {
    e.preventDefault();

    dispatch(addJobThunk(addJobDetails));
  };

  return (
    <div className="add-jobs">
      <h2>AddJobs</h2>
      <form className="add-job-form" onSubmit={handleAddJobSubmit}>
        <div>
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            onChange={(e) => handleAddJobChange(e)}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            onChange={(e) => handleAddJobChange(e)}
          />
        </div>
        <div>
          <label htmlFor="jobLocation">Job Location</label>
          <input
            id="jobLocation"
            name="jobLocation"
            onChange={(e) => handleAddJobChange(e)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            onChange={(e) => handleAddJobChange(e)}
          >
            <option>interview</option>
            <option>declined</option>
            <option>pending</option>
          </select>
        </div>
        <div>
          <label htmlFor="job-type">Job Type</label>
          <select
            id="job-type"
            name="jobType"
            onChange={(e) => handleAddJobChange(e)}
          >
            <option>full-time</option>
            <option>part-time</option>
            <option>remote</option>
            <option>internship</option>
          </select>
        </div>
        <div className="btn-grp">
          <button type="reset" className="clear-btn">
            Clear
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
