import { Link } from "react-router-dom";

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
          <Link to="/about" className="List">
            About
          </Link>
        </li>
        <li>
          <Link to="/basket" className="List">
            Basket {props.itemCount}
          </Link>
        </li>
      </ul>
    </div>
  );
}
