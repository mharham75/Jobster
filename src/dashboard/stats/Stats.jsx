//styles
import "./stats.scss";

const Stats = () => {
  return (
    <div className="card-main">

      <div className="card job-pending">
        <div className="card-about">
          <p>24</p>
          <p>icon</p>
        </div>
        <p>Pending Applications</p>
      </div>

      <div className="card job-scheduled">
      <div className="card-about">
          <p>27</p>
          <p>icon</p>
        </div>
        <p>Interview scheduled</p>
      </div>

      <div className="card job-declined">
      <div className="card-about">
          <p>4</p>
          <p>icon</p>
        </div>
        <p>Jobs Declined</p>
      </div>
    </div>
  );
};

export default Stats;
