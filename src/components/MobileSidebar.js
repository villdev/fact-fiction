import React, { useState } from "react";
import { useData } from "../context/DataProvider";
import { Link } from "react-router-dom";
import logo from "../images/fflogo.svg";

const MobileSidebar = () => {
  const {
    state: { genres },
  } = useData();

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  return (
    <div className="mobile-sidebar-wrapper">
      <div className="sidebar-logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <ul className="mobile-sidebar">
        <li
          className="sidebar__item"
          onClick={() => {
            setIsNewOpen(false);
            setIsGenreOpen(false);
            setIsAccountOpen((prevState) => !prevState);
          }}
        >
          <span>
            Account{" "}
            <svg
              className={
                isAccountOpen ? "dropdown-icon active" : "dropdown-icon"
              }
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
            </svg>
          </span>
          {isAccountOpen && (
            <div className="sidebar-subitem">
              <ul>
                <Link to="/wishlist" className="sidebar-link">
                  <li className="sidebar-subitem__item">Wishlist</li>
                </Link>
                <Link to="/cart" className="sidebar-link">
                  <li className="sidebar-subitem__item">Cart</li>
                </Link>
                {/* ! change based on whether its logged in or not */}
                <li className="sidebar-subitem__item">Logout</li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="sidebar__item"
          onClick={() => {
            setIsAccountOpen(false);
            setIsGenreOpen(false);
            setIsNewOpen((prevState) => !prevState);
          }}
        >
          <span>
            New Releases{" "}
            <svg
              className={isNewOpen ? "dropdown-icon active" : "dropdown-icon"}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
            </svg>
          </span>
          {isNewOpen && (
            <div className="sidebar-subitem">
              <ul>
                <Link to="/new" className="sidebar-link">
                  <li className="sidebar-subitem__item">Recent Releases</li>
                </Link>
                <li className="sidebar-subitem__item">Pre-orders</li>
                <li className="sidebar-subitem__item">Coming Soon</li>
              </ul>
            </div>
          )}
        </li>
        <Link to="/bestsellers" className="sidebar-link">
          <li className="sidebar__item">
            {" "}
            <span>Bestsellers</span>
          </li>
        </Link>
        <li
          className="sidebar__item"
          onClick={() => {
            setIsNewOpen(false);
            setIsAccountOpen(false);
            setIsGenreOpen((prevState) => !prevState);
          }}
        >
          <span>
            Genre{" "}
            <svg
              className={isGenreOpen ? "dropdown-icon active" : "dropdown-icon"}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
            </svg>
          </span>
          {isGenreOpen && (
            <div className="sidebar-subitem">
              <ul>
                {genres.map((genre) => (
                  <Link
                    to={{
                      pathname: "/category",
                      search: `?genre=${encodeURIComponent(genre.name)}`,
                    }}
                    className="sidebar-link header-sidebar-link"
                    key={genre._id}
                  >
                    <li key={genre._id} className="sidebar-subitem__item">
                      {genre.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </li>
        <Link to="/trending" className="sidebar-link">
          <li className="sidebar__item">
            <span>Trending</span>
          </li>
        </Link>
        <li className="sidebar__item">
          <span>Great Deals</span>
        </li>
        <li className="sidebar__item">
          <span>Contact Us</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
