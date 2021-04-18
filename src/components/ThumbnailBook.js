import React from "react";
import ClampLines from "react-clamp-lines";
import bookImg1 from "../images/covers/hptps.jpg";
import bookImg2 from "../images/covers/ejs.jpg";
import bookImg3 from "../images/covers/twok.jpg";
import bookImg4 from "../images/covers/ejs.jpg";

export default function ThumbnailBook({ bookData }) {
  return (
    <div className="thumbnail-book-wrapper">
      <div className="t-book-cover-wrapper">
        <img className="t-book-cover" src={bookImg1} alt="" />
        {bookData.discount[0] !== 0 && (
          <div className="t-book-badge">-{bookData.discount[0]}%</div>
        )}
        <div className="t-book-like-wrapper">
          <svg
            className="t-book-like-icon"
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
        </div>
        <div className="t-book-cart-wrapper">
          <svg
            className="t-book-cart-icon"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>
      <div className="t-book-data">
        {/* <div className="t-book-name">{bookData.title}</div> */}
        <ClampLines
          text={bookData.title}
          id={"book name" + bookData.id}
          lines={1}
          buttons={false}
          className="t-book-name"
        />
        <div className="t-book-author">{bookData.author}</div>
        <div className="t-book-rating">
          <div
            className="stars"
            style={{ "--rating": bookData.rating[0] }}
            aria-label="Rating of this product is 2.3 out of 5."
          ></div>{" "}
          <div className="t-book-rating--number">({bookData.rating[0]})</div>
        </div>
        <div className="t-book-price">
          <span className="t-book-selling-price">
            ₹
            {(
              bookData.price[0] -
              (bookData.price[0] * bookData.discount[0]) / 100
            ).toFixed(2)}
          </span>

          {bookData.discount[0] !== 0 && (
            <span className="t-book-original-price">₹{bookData.price[0]}</span>
          )}
        </div>
      </div>
    </div>
  );
}
