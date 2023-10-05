import React from "react";
import "../Components/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer__component">
        <hr />
        <div className="footer__text">
          <p>See personalized recommendations</p>
        </div>
        <Link to="/login">
          <button className="footer__button">Sign In</button>
        </Link>
        <div className="footer__new_customer">
          New Customer? <a href="#">Start here</a>
        </div>
        <hr />
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}

export default Footer;
