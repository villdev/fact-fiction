import React from "react";
import logo from "../images/fflogo.svg";

export default function Header() {
  return (
    <header>
      <div className="main-header">
        <div className="header-container-75">
          <div className="logo-wrapper">
            <a href="#">
              <img className="logo" src={logo} alt="" />
            </a>
          </div>
          {/* <form action="" method="get"></form> */}
          <form className="search-bar-wrapper">
            <input
              className="search-bar"
              type="text"
              name="search"
              id=""
              placeholder="Search"
            />
            <button className="search-btn" type="submit">
              <svg
                className="search-btn__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                // stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </button>
          </form>
          <div className="user-account-wrapper">
            <div className="avatar user-avatar bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <div className="account">
              Sign In{" "}
              {/* <svg
                className="dropdown-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
              </svg> */}
              <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#A0A0A0"
                />
              </svg>
            </div>
            <div className="account-dropdown"></div>
          </div>
          <div className="cart-wrapper">
            <div className="cart-icon-wrapper badge-wrapper">
              <svg
                aria-hidden="true"
                className="cart-icon icon-md"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span className="badge bg-blue-600 text-white">1</span>
              {/* <span className="badge bg-gray-300 text-black">1</span> */}
            </div>
            Cart - ₹ <div className="cart-price">1000.00</div>
          </div>
        </div>
      </div>
      <div className="sec-header">
        <nav className="nav header-container-75">
          <div className="home-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                fill="#333333"
              />
            </svg>
          </div>
          <ul>
            {/* <li className="nav__item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                  fill="#333333"
                />
              </svg>
            </li> */}
            <li className="nav__item">
              New Releases{" "}
              <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#A0A0A0"
                />
              </svg>
            </li>
            <li className="nav__item">
              Bestsellers{" "}
              <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#A0A0A0"
                />
              </svg>
            </li>
            <li className="nav__item">
              Genre{" "}
              <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#A0A0A0"
                />
              </svg>
            </li>
            <li className="nav__item">Trending</li>
            <li className="nav__item">Great Deals</li>
            <li className="nav__item">Contact Us</li>
          </ul>
          <div className="gift-card-wrapper">
            <svg
              className="gift-card-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
                fill="#333333"
              />
            </svg>
            Gift Cards
          </div>
          <div className="wishlist-wrapper">
            <svg
              className="wishlist-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                fill="#333333"
              />
            </svg>
            Wishlist - <div className="wishlist-counter"> 0 items</div>
          </div>
          <div className="lang-wrapper">
            <svg
              className="globe-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1744 15.3008C21.1883 15.2687 21.2 15.2356 21.2093 15.2018C21.9305 13.1272 21.9302 10.87 21.2084 8.79572C21.1994 8.76351 21.1883 8.73194 21.1751 8.70122C20.4941 6.81414 19.2485 5.18257 17.6076 4.02833C15.9667 2.87408 14.0101 2.25317 12.0039 2.25L12 2.24653L11.9961 2.25C9.99008 2.25317 8.03372 2.87394 6.39292 4.02795C4.75211 5.18196 3.50645 6.81322 2.82525 8.7C2.81162 8.73152 2.80019 8.76394 2.79103 8.79703C2.06917 10.8726 2.06963 13.1312 2.79234 15.2065C2.80104 15.2374 2.81172 15.2676 2.82431 15.2971C3.50508 17.1846 4.75067 18.8165 6.39168 19.9711C8.0327 21.1257 9.98949 21.7468 11.996 21.75L12 21.7535L12.004 21.75C14.0098 21.7468 15.966 21.1261 17.6067 19.9723C19.2474 18.8184 20.4931 17.1874 21.1744 15.3008V15.3008ZM9.60731 15.75H14.3927C13.9067 17.2404 13.0886 18.6009 12 19.7289C10.9114 18.6009 10.0933 17.2404 9.60731 15.75V15.75ZM9.21469 14.25C8.92849 12.7637 8.92849 11.2364 9.21469 9.75H14.7853C15.0715 11.2364 15.0715 12.7637 14.7853 14.25H9.21469ZM3.75 12C3.74947 11.2392 3.85444 10.482 4.06191 9.75H7.68487C7.43841 11.2399 7.43841 12.7601 7.68487 14.25H4.06191C3.85444 13.518 3.74947 12.7608 3.75 12ZM14.3927 8.25H9.60731C10.0933 6.75968 10.9114 5.39921 12 4.27125C13.0885 5.39921 13.9067 6.75968 14.3927 8.25V8.25ZM16.3151 9.75H19.9381C20.3539 11.2212 20.3539 12.7788 19.9381 14.25H16.3151C16.5616 12.7601 16.5616 11.2399 16.3151 9.75V9.75ZM19.3474 8.25H15.9757C15.5267 6.66957 14.7565 5.19874 13.7133 3.92944C14.914 4.18674 16.0425 4.7079 17.0169 5.45517C17.9914 6.20244 18.7874 7.1571 19.3474 8.25V8.25ZM10.2867 3.92944C9.2435 5.19874 8.4733 6.66957 8.02425 8.25H4.65262C5.21257 7.1571 6.0086 6.20244 6.98306 5.45517C7.95751 4.7079 9.08598 4.18674 10.2867 3.92944V3.92944ZM4.65262 15.75H8.02434C8.4734 17.3305 9.2436 18.8013 10.2868 20.0707C9.08605 19.8134 7.95755 19.2922 6.98308 18.5449C6.00861 17.7976 5.21257 16.8429 4.65262 15.75V15.75ZM13.7132 20.0707C14.7564 18.8013 15.5266 17.3305 15.9757 15.75H19.3474C18.7874 16.8429 17.9914 17.7976 17.0169 18.5449C16.0424 19.2922 14.9139 19.8134 13.7132 20.0707V20.0707Z"
                fill="#333333"
              />
            </svg>
            English{" "}
            <svg
              className="dropdown-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                fill="#A0A0A0"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
