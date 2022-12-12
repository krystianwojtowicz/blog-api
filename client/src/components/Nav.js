import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../actions/authActions";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  let auth = localStorage.getItem("user");
  const logout = () => {
    dispatch(signOut());
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Posts</Link>
        </li>

        {auth ? (
          <>
            <li>
              <Link to="/create-post">Create Post</Link>
            </li>
            <li>
              <Link onClick={logout} to="/signup">
                {/* state */}
                Logout (
                {typeof auth !== "object" ? JSON.parse(auth).username : null})
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Nav;
