import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link className="header-text" to="/">
          <p>Add Players</p>
        </Link>
        <Link className="header-text" to="add-score">
          <p>Add Score</p>
        </Link>
        <Link className="header-text" to="/score">
          <p>See Stats</p>
        </Link>
      </div>
      <div className="color-heder-line"></div>
    </div>
  );
};

export default Header;
