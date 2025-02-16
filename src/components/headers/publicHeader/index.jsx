import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {};

const PublicHeader = () => {
  const getUser = window.localStorage.getItem("user");
  const loggedInUser = getUser ? JSON.parse(getUser) : null;

  console.log(loggedInUser);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-full lg:w-2/4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <a href="/#about" className="font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="font-medium">
                Services
              </a>
            </li>
            <li>
              <NavLink
                to="/search-house"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="font-medium"
              >
                Browse houses
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={"/logo.png"} alt="" className="max-w-[80px] rounded-xl" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="/#about" className="font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="font-medium">
              Services
            </a>
          </li>
          <li>
            <NavLink
              to="/search-house"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="font-medium"
            >
              Browse houses
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        {loggedInUser ? (
          loggedInUser?.role === "admin" ? (
            <Link to={`/admin`} className="btn btn-info mr-4">
              Open Dashboard
            </Link>
          ) : (
            <Link to={`/_/${loggedInUser?.role}`} className="btn btn-info mr-4">
              Open Dashboard
            </Link>
          )
        ) : (
          false
        )}
        {loggedInUser && (
          <Link to={"/logout"} className="btn btn-error">
            Logout
          </Link>
        )}

        {!loggedInUser && (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 btn btn-outline btn-error">
              Login
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow right-0 bg-base-100 rounded-box w-52"
            >
              {(loggedInUser?.role === "agent" || !loggedInUser) && (
                <li>
                  <Link to={"/auth/agent?login"}>Agent</Link>
                </li>
              )}
              {(loggedInUser?.role === "buyer" || !loggedInUser) && (
                <li>
                  <Link to={"/auth/buyer?login"}>Buyer</Link>
                </li>
              )}
              {(loggedInUser?.role === "seller" || !loggedInUser) && (
                <li>
                  <Link to={"/auth/seller?login"}>Seller</Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicHeader;
