import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav__bar">
        <ul>
          <a href="#">
            <li className="line">☰ All</li>
          </a>
          <a href="#">
            <li>Tody's Deals</li>
          </a>
          <a href="#">
            <li>Customer Services</li>
          </a>
          <a href="#">
            <li>Registry</li>
          </a>
          <a href="#">
            <li>Gift Cards</li>
          </a>
          <a href="#">
            <li>Sell</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
