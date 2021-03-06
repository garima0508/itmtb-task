import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <nav>
        <ul className="nav-links">
          {/* <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/reco" exact>
              Reco
            </NavLink>
          </li>
          <li>
            <NavLink to="/postReco" exact>
              PostReco
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
