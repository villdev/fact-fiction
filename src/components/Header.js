import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import Loader from "../components/Loader";
import logo from "../images/fflogo.svg";

export default function Header() {
  const {
    state: { genres, cart, wishlist, searchQuery },
    dispatch: dataDispatch,
  } = useData();

  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <header>
      <div className="main-header">
        <div className="header-container-75">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
            {/* <a href="#">
              <img className="logo" src={logo} alt="" />
            </a> */}
          </div>
          {/* <form action="" method="get"></form> */}
          <form className="search-bar-wrapper" action={"/search"}>
            <input
              className="search-bar"
              // type="text"
              type="search"
              name="s"
              id=""
              placeholder="Search"
              value={searchQuery}
              onChange={(e) =>
                dataDispatch({
                  type: "UPDATE_SEARCH_QUERY",
                  payload: e.target.value,
                })
              }
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
              {/* <svg
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
              </svg> */}
              <svg
                // className="icon-md"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C10.8119 19.2 9.64218 18.906 8.59528 18.3441C7.54837 17.7823 6.65678 16.9701 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C17.3432 16.9701 16.4516 17.7823 15.4047 18.3441C14.3578 18.906 13.1881 19.2 12 19.2Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div className="account">
              {/* Sign In{" "} */}
              Login{" "}
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
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
              </svg>
            </div>
            <div className="account-dropdown">
              <div className="sign-in-wrapper">
                <Link className="nav-link" to="/login">
                  <button className="btn btn--rounded btn--dark btn--sm btn-sign-in">
                    Login
                  </button>
                </Link>
                <div className="sign-up-wrapper">
                  <div className="sign-up__text">New Customer?</div>
                  <Link className="nav-link" to="/signup">
                    <button className="btn btn--sm btn--rounded btn--link btn-register">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
              <div className="account-actions-wrapper">
                <ul>
                  <li className="account-action">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 5V19H5V5H19ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12ZM12 8C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9C13 8.45 12.55 8 12 8ZM18 18H6V16.47C6 13.97 9.97 12.89 12 12.89C14.03 12.89 18 13.97 18 16.47V18ZM8.31 16H15.69C15 15.44 13.31 14.88 12 14.88C10.69 14.88 8.99 15.44 8.31 16V16Z"
                        fill="#333333"
                      />
                    </svg>
                    Account Details
                  </li>
                  <li className="account-action">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                        fill="#333333"
                      />
                    </svg>
                    Orders
                  </li>

                  <Link to="/wishlist" className="nav-link">
                    <li className="account-action">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                          fill="#333333"
                        />
                      </svg>{" "}
                      Wishlist
                    </li>
                  </Link>
                  <li className="account-action">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z"
                        fill="#333333"
                      />
                      <path
                        d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                        fill="#333333"
                      />
                    </svg>
                    Addresses
                  </li>
                  <li className="account-action">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM17 14H3V6H17V14ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7ZM23 7V18C23 19.1 22.1 20 21 20H4V18H21V7H23Z"
                        fill="#333333"
                      />
                    </svg>
                    Payment Method
                  </li>
                  <li className="btn-logout account-action">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z"
                        fill="#333333"
                      />
                      <path
                        d="M20.65 11.65L17.86 8.86C17.7905 8.78855 17.7012 8.73948 17.6036 8.71907C17.506 8.69865 17.4045 8.70783 17.3121 8.74541C17.2198 8.783 17.1408 8.84729 17.0851 8.93005C17.0295 9.01282 16.9999 9.11029 17 9.21V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65V11.65Z"
                        fill="#333333"
                      />
                    </svg>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="vertical-separator"></div>
          <Link to="/cart" className="nav-link">
            <div className="cart-wrapper">
              <div className="cart-icon-wrapper badge-wrapper">
                <svg
                  aria-hidden="true"
                  className="cart-icon icon-sm"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                {cart.items.length > 0 && (
                  <span className="badge badge--sm bg-blue-600 text-white">
                    {/* 1 */}
                    {cart.items.length}
                  </span>
                )}
                {/* <span className="badge bg-gray-300 text-black">1</span> */}
              </div>
              {/* Cart - <div className="cart-price">₹1000.00</div> */}
              Cart -{" "}
              <div className="cart-price">₹{(+cart.total).toFixed(2)}</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="sec-header">
        <nav className="nav header-container-75">
          <Link to="/" className="nav-link">
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
          </Link>
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
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
              </svg>
              <div className="nav-dropdown">
                <ul>
                  <Link to="/new" className="nav-link">
                    <li className="nav-dropdown__item">Recent Releases</li>
                  </Link>
                  <li className="nav-dropdown__item">Pre-orders</li>
                  <li className="nav-dropdown__item">Coming Soon</li>
                </ul>
              </div>
            </li>
            <Link to="/bestsellers" className="nav-link">
              <li className="nav__item">
                Bestsellers{" "}
                {/* <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
              </svg> */}
              </li>
            </Link>
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
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
              </svg>
              <div className="nav-dropdown">
                <ul>
                  {/* {console.log(genres)} */}
                  {genres.map((genre) => (
                    // <Link
                    //   to={{
                    //     pathname: "/category",
                    //     search: `?genre=${encodeURIComponent(genre.name)}`,
                    //   }}
                    //   className="nav-link header-nav-link"
                    //   key={genre._id}
                    // >
                    <li key={genre._id} className="nav-dropdown__item">
                      {genre.name}
                    </li>
                    // </Link>
                  ))}
                </ul>
              </div>
            </li>
            <Link to="/trending" className="nav-link">
              <li className="nav__item">Trending</li>
            </Link>
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
          <div className="vertical-separator"></div>
          <Link to="/wishlist" className="nav-link">
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
              {/* Wishlist - <div className="wishlist-counter"> 0 items</div> */}
              Wishlist -{" "}
              <div className="wishlist-counter">
                {" "}
                {wishlist.items.length} items
              </div>
            </div>
          </Link>
          <div className="vertical-separator"></div>
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
            En{" "}
            <svg
              className="dropdown-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
            </svg>
            <div className="nav-dropdown">
              <ul>
                <li className="nav-dropdown__item">English</li>
                <li className="nav-dropdown__item">Hindi</li>
                <li className="nav-dropdown__item">German</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Loader />
    </header>
  );
}
