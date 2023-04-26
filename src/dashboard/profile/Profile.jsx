import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editProfileThunk } from "../../redux/actions/profileAction";

//styles
import "./profile.scss";

const Profile = () => {

  const loginuser = useSelector(store => store.userLogin?.user?.user)
  const dispatch = useDispatch();

  const [updateProfile, setUpdateProfile] = useState({
    name: loginuser?.name || '',
    lastName: loginuser?.lastName ||'',
    email: loginuser?.email || '',
    location: loginuser.location || ''
  })

  const handleProfileChange = e => {
    const {name, value} = e?.target;

    setUpdateProfile({
      ...updateProfile,
      [name]: value
    })
  }

  const handleProfileSubmit = e => {
    e.preventDefault();

    dispatch(editProfileThunk(updateProfile));
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <form className="profile-form" onSubmit={handleProfileSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={updateProfile?.name} onChange={ e => handleProfileChange(e)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" value={updateProfile?.lastName} onChange={ e => handleProfileChange(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={updateProfile?.email} onChange={ e => handleProfileChange(e)} />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input id="location" name="location" value={updateProfile?.location} onChange={ e => handleProfileChange(e)} />
        </div>
        <div>
          <button type='submit' className="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
