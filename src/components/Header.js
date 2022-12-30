import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Nav-element">
      <Link to="/" id="homelink" className="List">
        Home
      </Link>

      <Link to="/about" id="aboutlink" className="List">
        About
      </Link>

      <Link to="/basket" id="basketlink" className="List">
        Basket: {props.itemCount} items
      </Link>
    </div>
  );
}
export default Header;
