import React from "react";
import DropDown from "../DropDown";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="list-container">
        <ul>
          <li>Bootflat</li>
          <li>Link</li>
          <li>
            <DropDown className={"green-dropDown"} title={"Dropdown"} />
          </li>
        </ul>
      </div>
      <div className="search-container">
        <input className="search" />
      </div>
    </div>
  );
};

export default Navbar;
