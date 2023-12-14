import React from "react";
import Logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalState";
import {auth} from "../firebase"


const Header = () => {

    const { user , basket} = useAuth()
    const handleAuth = () => {
        auth.signOut();
    }

  return (
      <div className="header">
 <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
          </Link>
          <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
          </div>
          <div className="header-nav">
              <Link to={!user && "/login"}>
                  <div className="header-option" onClick={handleAuth}>
                      <span className="header-optionLineOne">Hello {user ? `${user.email}` : "Guest"}</span>
                      <span className="header-optionLineTwo">{ user ? "Sign Out" : "Sign In"}</span>
                  </div>
              </Link>

              <Link to="/orders">
                  <div className="header-option">
                      <span className="header-optionLineOne">Returns</span>
                      <span className="header-optionLineTwo">& Orders</span>
                  </div>
              </Link>

              <div className="header-option">
                  <span className="header-optionLineOne">your</span>
                      <span className="header-optionLineTwo">prime</span>
              </div>
               <Link to="/checkout">
                  <div className="header-optionBasket">
                      <img src={shoppingCart} />
                       <span className="header-optionLineTwo header-basketCount">{basket?.length}

            </span>
                  </div>
              </Link>

          </div>


    </div>
  );
};

export default Header;
