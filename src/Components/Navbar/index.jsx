import React, { useState } from "react";
import DropDown from "../DropDown";
import "./style.css";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [viewNavbar, setViewNavbar] = useState(true);
  const [navbarClass, setNavbarClass] = useState("navbar-responsive");
  const ViewNavbarHandling = () => {
    setViewNavbar(!viewNavbar);
    if (viewNavbar) {
      setNavbarClass("View-navbar-responsive");
    } else {
      setNavbarClass("navbar-responsive");
    }
  };
  return (
    <>
      <div className="navbar-container">
        <div className="list-container">
          <ul>
            <li>Bootflat</li>
            <li>Link</li>
            <li>Bootflat</li>
            <li>Link</li>
            <li>Bootflat</li>
            <li>Link</li>
            <li>
              <DropDown className={"green-dropDown"} title={"Dropdown"} />
            </li>
          </ul>
        </div>
        <div className="search-container">
          <input className="search" />
          {viewNavbar ? (
            <TiThMenu onClick={ViewNavbarHandling} className="menu-icon" />
          ) : (
            <RxCross2 onClick={ViewNavbarHandling} className="menu-icon" />
          )}
        </div>
      </div>
      <div className={`${navbarClass}`}>
        <div className="res-search-container">
          <label htmlFor="search">Search</label>
          <input className="res-search" />
        </div>
        <div className="responsive-list">
          <ul>
            <li>Bootflat</li>
            <li>Link</li>
            <li>Bootflat</li>
            <li>Link</li>
            <li>Bootflat</li>
            <li>Link</li>
            {/* <li>
              <DropDown className={"green-dropDown"} title={"Dropdown"} />
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
