import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user" || {}));

  if (!loggedUser?.email) {
    return (
      <div>
        <div>You are not logged in</div>
        <Link to={"/auth/admin?login"} className="btn">
          Login
        </Link>
      </div>
    );
  }

  return <div>
    <Link to={'user-list'} className="btn btn-primary">User List</Link>
    <Link to={'house-list'} className="btn btn-primary ml-5" >House List</Link>
  </div>;
};

export default AdminDashboard;
