import React from "react";
import Path from "./Path";
import ClampLines from "react-clamp-lines";
import bookImg1 from "../images/covers/hptps.jpg";

export default function ProductPage({ productData }) {
  return (
    <div className="product-page-wrapper container-75">
      <Path pathHistory={["Home", "Genre", "Fiction", productData.title]} />
      <div className="product-display-wrapper">
        <div className="product-display__imp-details">
          <div className="product-display__covers">
            <div className="book-covers">
              {productData.covers.map((cover, index) => (
                <div
                  key={index}
                  className={
                    index === 0 ? "book-cover book-cover--active" : "book-cover"
                  }
                >
                  <img src={bookImg1} alt="" />
                </div>
              ))}
            </div>
            <div className="book-cover-display">
              <img src={bookImg1} alt="" />
              {productData.discount[0] !== 0 && (
                <div className="t-book-badge">-{productData.discount[0]}%</div>
              )}
              <div className="cover-dot">
                {productData.covers.length > 1 &&
                  productData.covers.map((cover, index) => (
                    <button
                      key={index}
                      aria-label="cover-carousel-btn"
                      type="button"
                      disabled={index === 0}
                    >
                      <span></span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div className="product-display__main-details">
            <div className="book-availability">
              Availability: <span>In Stock</span>{" "}
            </div>
            <div className="book-title">{productData.title}</div>
            <div className="book-author">{productData.author}</div>
            <div className="book-rating">
              <div
                className="stars"
                style={{ "--rating": productData.rating[0] }}
                aria-label="Rating of this product is 2.3 out of 5."
              ></div>{" "}
              <div className="book-rating--number">
                ({productData.rating[0]})
              </div>
            </div>
            <div className="product-display-separator"></div>
            <div className="book-price-wishlist-wrapper">
              <div className="book-price-wrapper">
                Price:{" "}
                <div className="book-price">
                  <span className="book-selling-price">
                    ₹
                    {(
                      productData.price[0] -
                      (productData.price[0] * productData.discount[0]) / 100
                    ).toFixed(2)}
                  </span>
                  {productData.discount[0] !== 0 && (
                    <span className="book-original-price">
                      ₹{productData.price[0]}
                    </span>
                  )}
                </div>
              </div>
              <div className="book-wishlist-wrapper">
                Wishlist:{" "}
                <div className="book-wishlist-btn">
                  <svg
                    className="book-like-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                      // fill="#333333"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="product-display-separator"></div>
            <div className="book-buy-wrapper">
              <div className="book-quantity-counter-wrapper">
                Quantity:
                <div className="book-quantity-counter">
                  <button className="counter-btn">-</button>
                  <div className="counter-value">1</div>
                  <button className="counter-btn">+</button>
                </div>
              </div>
              {/* <div className="product-display-separator--vertical"></div> */}
              <button className="btn btn--dark btn--sm btn-buy-now">
                Buy Now
              </button>
              <button className="btn btn--black btn--outlined btn--sm btn-add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="product-display__full-details">
          <div className="product-display__synopsis">
            <div className="product-display__full-details-headee">
              Synopsis:
            </div>
            <div className="product-display__full-details-content book-synopsis">
              {productData.synopsis[0]} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis labore reprehenderit dolor ipsa,
              repudiandae hic dolore eligendi quidem
            </div>
          </div>
          <div className="product-display__misc-details">
            <div className="product-display__full-details-header">
              Book details:
            </div>
            <div className="product-display__full-details-content book-misc-details">
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Language:</div>
                <div className="book-misc-detail__content">
                  {productData.language}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Pages:</div>
                <div className="book-misc-detail__content">
                  {productData.pages}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Publish Date:</div>
                <div className="book-misc-detail__content">
                  {productData.publishDate}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Publisher:</div>
                <div className="book-misc-detail__content">
                  {productData.publisher}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">ISBN13:</div>
                <div className="book-misc-detail__content">
                  {productData.isbn13}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Dimensions:</div>
                <div className="book-misc-detail__content">
                  {productData.dimensions}
                </div>
              </div>
              <div className="book-misc-detail">
                <div className="book-misc-detail__header">Weight:</div>
                <div className="book-misc-detail__content">
                  {productData.weight}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-display__review-wrapper"></div>
      </div>
    </div>
  );
}
