import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/posts">Posts</Link>
        </li>

        {auth ? (
          <>
            <li>
              <Link to="/create-post">Create Post</Link>
            </li>
            <li>
              <Link onClick={logout} to="/signup">
                Logout ({JSON.parse(auth).username})
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
