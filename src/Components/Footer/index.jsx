import React from "react";
import Logo from "../../assets/logo-rempvebg.png";
import "./style.css";
const Footer = () => {
  return (
    <div className="footerWraper">
      <div className="logo">
        <div className="innerwrap">
          <img className="logoImage" src={Logo} alt="" />
          <h3>Bootflat</h3>
        </div>
      </div>
      <div className="listItems">
        <div>
          <ul>
            <li>
              <h6>PORTFOLIO</h6>
            </li>
            <li>Web Design and development</li>
            <li>Branding</li>
            <li>Print</li>
            <li>User</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h6>ABOUT</h6>
            </li>
            <li>Company</li>
            <li>Vision</li>
            <li>History</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h6>GALLERY</h6>
            </li>
            <li>Portfoli</li>
            <li>Portfoli</li>
            <li>Portfoli</li>
            <li>Portfoli</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h6>CONTACT</h6>
            </li>
            <li>Portfoli</li>
            <li>Portfoli</li>
            <li>Portfoli</li>
            <li>Portfoli</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
