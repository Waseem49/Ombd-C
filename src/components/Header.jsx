import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth] = useState(true);
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logosec">
          <img className="logo" src={logo} alt="logo" />
          <p>
            Ombd'<span>C</span>
          </p>
        </div>
      </Link>
      {auth ? (
        <Link to={"/Favorite"}>
          <div className="fav">
            <FaHeart className="fav_icon" />
            <span>Favourite</span>
          </div>
        </Link>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
};

export default Header;
