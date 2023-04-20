//styles
import "./addJobs.scss";

const AddJobs = () => {
  return (
    <div className="add-jobs">
      <h2>AddJobs</h2>
      <form className="add-job-form">
        <div>
          <label htmlFor="position">Position</label>
          <input id="position" name="position" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" />
        </div>
        <div>
          <label htmlFor="jobloction">Job Location</label>
          <input id="jobloction" name="jobloction" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status">
            <option>pending</option>
            <option>interview</option>
            <option>declined</option>
          </select>
        </div>
        <div>
          <label htmlFor="job-type">Job Type</label>
          <select id="job-type">
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
