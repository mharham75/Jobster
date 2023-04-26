export const addUserToLocalStorage = (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const getUserDetailsTokenFromLocalStorage = () => {
  const _user = JSON.parse(localStorage.getItem('user'));
  const { user } = _user;
  if(user){
    return user?.token;
  }
}