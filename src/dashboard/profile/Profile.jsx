//styles
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <form className="profile-form">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
        </div>
        <div>
          <label htmlFor="loction">Location</label>
          <input id="loction" name="loction" />
        </div>
        <div>
          <button className="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
