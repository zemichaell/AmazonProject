import React from "react";

import "../Components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../Components/firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          {/* if no user and no one login goto home page */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
              {/* show  email of the use insted of Gueast when login*/}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
              {/* use to chage if login, show sign out   */}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
