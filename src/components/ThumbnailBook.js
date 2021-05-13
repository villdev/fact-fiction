import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClampLines from "react-clamp-lines";
import { useData } from "../context/DataProvider";

export default function ThumbnailBook({ bookData }) {
  const {
    state: { wishlist, cart },
    dispatch: dataDispatch,
  } = useData();
  const updateWishlist = async (action) => {
    try {
      const postBody = {
        action,
        bookId: bookData._id,
        format: "paperback",
      };
      axios
        .post(`http://localhost:3000/wishlists/${wishlist.id}`, postBody)
        .then(({ data: { success, wishlist } }) => {
          dataDispatch({ type: "UPDATE_WISHLIST", payload: wishlist.items });
        });
    } catch (error) {
      console.error(error);
    }
  };

  const updateCart = async (action) => {
    try {
      const postBody = {
        action,
        bookId: bookData._id,
        quantity: 1,
        format: "paperback",
      };
      axios
        .post(`http://localhost:3000/carts/${cart.id}`, postBody)
        .then(({ data: { success, cart } }) => {
          dataDispatch({
            type: "UPDATE_CART",
            payload: {
              items: cart.items,
              total: cart.checkout.total,
              subtotal: cart.checkout.subtotal,
              discount: cart.checkout.discountTotal,
            },
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  const presentInWishlist = (id) => {
    if (wishlist.items.find((item) => item.book._id === id)) return true;
    else return false;
  };
  const presentInCart = (id) => {
    if (cart.items.find((item) => item.book._id === id)) return true;
    else return false;
  };
  return (
    <div className="thumbnail-book-wrapper">
      <div className="t-book-cover-wrapper">
        <Link to={`/book/${bookData._id}`} className="nav-link">
          {/* <img className="t-book-cover" src={bookImg1} alt="" /> */}
          <img className="t-book-cover" src={bookData.covers[0]} alt="" />
        </Link>
        {/* {bookData.discount[0] !== 0 && ( */}
        {bookData.formats[0].discount !== 0 && (
          <div className="t-book-badge">-{bookData.formats[0].discount}%</div>
        )}

        <div
          className="t-book-like-wrapper"
          onClick={() => {
            return presentInWishlist(bookData._id)
              ? updateWishlist("REMOVE_FROM_WISHLIST")
              : updateWishlist("ADD_TO_WISHLIST");
          }}
        >
          <svg
            className="t-book-like-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={presentInWishlist(bookData._id) ? "#dc2626" : "#333333"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
              // fill="#333333"
            />
          </svg>
        </div>

        {!presentInCart(bookData._id) && (
          <div
            className="t-book-cart-wrapper"
            onClick={() => updateCart("ADD_TO_CART")}
          >
            <svg
              className="t-book-cart-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
        )}
      </div>
      <Link to={`/book/${bookData._id}`} className="nav-link">
        <div className="t-book-data">
          {/* <div className="t-book-name">{bookData.title}</div> */}
          <ClampLines
            text={bookData.name}
            id={bookData._id}
            lines={1}
            buttons={false}
            className="t-book-name"
          />
          <div className="t-book-author">{bookData.authors}</div>
          <div className="t-book-rating">
            <div
              className="stars"
              // style={{ "--rating": bookData.rating[0] }}
              style={{ "--rating": 4.2 }}
              aria-label="Rating of this product is 2.3 out of 5."
            ></div>{" "}
            {/* <div className="t-book-rating--number">({bookData.rating[0]})</div> */}
            <div className="t-book-rating--number">(4.2)</div>
          </div>
          <div className="t-book-price">
            <span className="t-book-selling-price">
              ₹
              {(
                bookData.formats[0].price -
                (bookData.formats[0].price * bookData.formats[0].discount) / 100
              ).toFixed(2)}
            </span>

            {bookData.formats[0].discount !== 0 && (
              <span className="t-book-original-price">
                ₹{bookData.formats[0].price}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
