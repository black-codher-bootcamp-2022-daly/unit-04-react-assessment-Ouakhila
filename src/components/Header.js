import { Link } from "react-router-dom";
//import { useState } from "react";

export function Header(props) {
  return (
    <div className="Nav-element">
      <ul className="Nav-bar-list">
        <li>
          <Link to="/" className="List">
            Home
          </Link>
        </li>

        <li>
          <Link to="/About" className="List">
            About
          </Link>
        </li>
        <li>
          <Link to="/Basket" className="List">
            Basket {props.count}
          </Link>
        </li>
      </ul>
    </div>
  );
}
