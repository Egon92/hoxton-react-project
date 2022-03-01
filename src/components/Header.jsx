import { Link } from "react-router-dom";
import About from "./About";

export default function Header(props) {
  return (
    <header className="header">
      <div className="top-header">
        <div className="logo">
          <img src="/assets/leather.png" alt="" />
        </div>
        <div className="right-header">
          <div className="company-name">Leather company Ltd.</div>
          <div className="search-bar">
            <div className="search-input">
              <input type="search" />
            </div>
            <div className="search-icon">
              <img src="/assets/search_white_24dp.svg" alt="" />
            </div>
            <div className="search-basket">
              <button
                className="search-basket-button"
                onClick={() => props.setModal(true)}
              >
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>Products</li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Solutions</li>
        <li>Contact Us</li>
      </nav>
    </header>
  );
}
