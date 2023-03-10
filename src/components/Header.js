import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Nav-element">
      <ul className="Nav-bar-list">
        <li>
          <Link to="/" id="homelink" className="List">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" id="aboutlink" className="List">
            About
          </Link>
        </li>
        <li>
          <Link to="/basket" id="basketlink" className="List">
            Basket: {props.itemCount} items
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
