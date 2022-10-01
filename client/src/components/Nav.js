import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Comments</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
