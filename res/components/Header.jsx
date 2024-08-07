import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import getJoke from "./GetJoke";

const Header = () => {
  return (
    <div className="header-container">
      <div className="btn">
        <Link to="/" className="btn">
          <button>Random Joke</button>
        </Link>
      </div>
      <div className="btn">
        <Link to="/search" className="btn">
          <button>Search Joke</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
