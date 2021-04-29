import React from "react";
import bookImg1 from "../images/covers/hptps.jpg";
import ClampLines from "react-clamp-lines";

export default function ListBookActions({ cart, wishlist, bookData }) {
  const sellingPrice = (
    bookData.price[0] -
    (bookData.price[0] * bookData.discount[0]) / 100
  ).toFixed(2);
  return (
    <>
      {cart && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <div className="product-details__cover">
              <img src={bookImg1} alt="" />
            </div>
            <div className="product-details__name">
              {/* <div className="product-details__title">{bookData.title}</div> */}

              <ClampLines
                text={bookData.title}
                id={"book name" + bookData.id}
                lines={1}
                buttons={false}
                className="product-details__title"
              />
              <div className="product-details__author">{bookData.author}</div>
              <div className="product-details__price">
                <div className="product-details__selling-price">
                  {/* ₹{(
                                    bookData.price[0] -
                                    (bookData.price[0] * bookData.discount[0]) / 100
                                ).toFixed(2)} */}
                  ₹{sellingPrice}
                </div>

                {bookData.discount[0] !== 0 && (
                  <div className="product-details__original-price">
                    ₹{bookData.price[0]}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="product-quantity-wrapper book-quantity-counter">
            <button className="counter-btn">-</button>
            <div className="counter-value">1</div>
            <button className="counter-btn">+</button>
          </div>
          <div className="total-amount-wrapper">₹{1 * sellingPrice}</div>
          <div className="actions-wrapper">
            <button className="btn btn--dark btn--sm btn--outlined btn-move-to-wishlist">
              Move to Wishlist
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button className="btn btn--danger btn--sm btn-remove">
              Remove
            </button>
          </div>
        </div>
      )}
      {wishlist && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <div className="product-details__cover">
              <img src={bookImg1} alt="" />
            </div>
            <div className="product-details__name">
              {/* <div className="product-details__title">{bookData.title}</div> */}

              <ClampLines
                text={bookData.title}
                id={"book name" + bookData.id}
                lines={1}
                buttons={false}
                className="product-details__title"
              />
              <div className="product-details__author">{bookData.author}</div>
            </div>
          </div>
          <div className="product-price-wrapper">
            <div className="product-price__selling-price">
              {/* ₹{(
                                    bookData.price[0] -
                                    (bookData.price[0] * bookData.discount[0]) / 100
                                ).toFixed(2)} */}
              ₹{sellingPrice}
            </div>

            {bookData.discount[0] !== 0 && (
              <div className="product-price__original-price">
                ₹{bookData.price[0]}
              </div>
            )}
          </div>
          <div className="product-availability-wrapper">In Stock</div>
          <div className="actions-wrapper">
            <button className="btn btn--dark btn--sm btn--outlined btn-move-to-cart">
              Add to Cart
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button className="btn btn--danger btn--sm btn-remove">
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
}
