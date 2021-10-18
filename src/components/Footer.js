import React from "react";

import logo from "../images/fflogo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container-75">
        <div className="footer__section footer__about">
          <div className="footer__header">
            <div className="logo-wrapper">
              <a href="#">
                <img className="logo--sm" src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="footer__content">
            <div className="site-about">Book E-Commerce website</div>
            <div className="site-code">
              <a className="github-code-link" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z"
                    fill="#333333"
                  />
                </svg>{" "}
                Source Code
              </a>
            </div>
            <div className="site-made-by">
              Made by{" "}
              <a
                href="https://shobhitk.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shobhit K
              </a>
            </div>
            <div className="social-media-links">
              <a href="#" className="social-media-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28001 9.09 5.11001 7.38 3.00001 4.79C2.63001 5.42 2.42001 6.16 2.42001 6.94C2.42001 8.43 3.17001 9.75 4.33001 10.5C3.62001 10.5 2.96001 10.3 2.38001 10V10.03C2.38001 12.11 3.86001 13.85 5.82001 14.24C5.19074 14.4122 4.5301 14.4362 3.89001 14.31C4.16162 15.1625 4.69355 15.9084 5.41103 16.4429C6.1285 16.9775 6.99546 17.2737 7.89001 17.29C6.37364 18.4904 4.494 19.1393 2.56001 19.13C2.22001 19.13 1.88001 19.11 1.54001 19.07C3.44001 20.29 5.70001 21 8.12001 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    // fill="#333333"
                  />
                </svg>{" "}
                {/* Twitter */}
              </a>
              <div className="social-media-separator">&nbsp;</div>
              <a href="#" className="social-media-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    // fill="#333333"
                  />
                </svg>
                {/* LinkedIn */}
              </a>
            </div>
            <div className="footer__copyright">&#169; 2021</div>
          </div>
        </div>
        <div className="footer__section footer__menu">
          <div className="footer__header">Menu</div>
          <div className="footer__content">
            <div className="footer__content-item">Home</div>
            <div className="footer__content-item">New Releases</div>
            <div className="footer__content-item">Bestsellers</div>
            <div className="footer__content-item">Genres</div>
            <div className="footer__content-item">Trending</div>
            <div className="footer__content-item">Great Deals</div>
            <div className="footer__content-item">Contact Us</div>
          </div>
        </div>
        <div className="footer__section footer__information">
          <div className="footer__header">Information</div>
          <div className="footer__content">
            <div className="footer__content-item">Terms &#38; Conditions</div>
            <div className="footer__content-item">FAQ</div>
            <div className="footer__content-item">Delivery &#38; Return</div>
            <div className="footer__content-item">Gift Cards</div>
          </div>
        </div>
        <div className="footer__section footer__subscription">
          <div className="footer__header">Subscription</div>
          <div className="footer__content">
            <div className="site-sub-desc">
              Subscribe to get the latest sale, new releases and promotion
              notifications directly in your inbox.
            </div>
            <form className="site-sub-form">
              <label htmlFor="sub-email">Enter your E-mail</label>
              <input
                type="email"
                name="sub-email"
                id="sub-email"
                placeholder="e.g. mail@mail.com"
              />
              <button
                type="submit"
                className="btn btn--black btn--outlined btn--sm btn-subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
