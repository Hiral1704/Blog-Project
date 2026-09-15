import React from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  logoutUser
} from "../redux/slices/authSlice";

function Navbar() {

  const user = useSelector(
    (state) => state.auth.user
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogout() {

    dispatch(logoutUser());

    navigate("/");
  }

  return (
    <nav className="navbar">

      <div className="logo">

        <Link to="/">
          MyBlog
        </Link>

      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/blogs">
          Blogs
        </Link>

        {user && (
          <Link to="/add-blog">
            Add Blog
          </Link>
        )}

        {!user ? (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="welcome">
              Hi, {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;