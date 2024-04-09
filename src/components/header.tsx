import { Link } from "react-router-dom";
import "./_header.scss";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="car">🚗</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
