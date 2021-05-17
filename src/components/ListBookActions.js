import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useData } from "../context/DataProvider";
import { successNotification, successRemoveNotification } from "../utils/toast";
import ClampLines from "react-clamp-lines";

export default function ListBookActions({
  cartVersion,
  wishlistVersion,
  bookData: { book, quantity, format },
}) {
  // console.log(book);
  const [bookQuantity, setBookQuantity] = useState(quantity);
  const [wishlistReqLoading, setWishlistReqLoading] = useState(false);
  const [cartReqLoading, setCartReqLoading] = useState(false);
  const {
    state: { wishlist, cart },
    dispatch: dataDispatch,
  } = useData();
  const sellingPrice = (
    book.formats[0].price -
    (book.formats[0].price * book.formats[0].discount) / 100
  ).toFixed(2);

  const updateCart = async (
    action,
    modifiedQuantity,
    showNotification = true,
    showLoader = true
  ) => {
    try {
      if (showLoader) setCartReqLoading(true);
      const postBody = {
        action,
        bookId: book._id,
        format: "paperback",
        // quantity: modifiedQuantity || bookQuantity,
        quantity: modifiedQuantity,
      };
      axios
        .post(`https://fact-fiction.herokuapp.com/carts/${cart.id}`, postBody)
        .then(({ data: { success, cart, message } }) => {
          dataDispatch({
            type: "UPDATE_CART",
            payload: {
              items: cart.items,
              total: cart.checkout.total,
              subtotal: cart.checkout.subtotal,
              discount: cart.checkout.discountTotal,
            },
          });
          if (showNotification) {
            if (action === "ADD_TO_CART") {
              if (message) successNotification(message);
              else successNotification("Added to cart!");
            } else if (action === "REMOVE_FROM_CART") {
              successRemoveNotification("Removed from cart!");
            }
          }
          setCartReqLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const updateQuantity = (value) => {
    setBookQuantity((prevQuantity) => {
      if (
        prevQuantity + value !== 0 &&
        prevQuantity + value !== book.formats[0].stock + 1
      ) {
        updateCart("UPDATE_QUANTITY", prevQuantity + value, false, false);
        return prevQuantity + value;
      } else {
        return prevQuantity;
      }
    });
  };

  const addToCart = () => {
    if (!cartReqLoading) updateCart("ADD_TO_CART", 1);
  };
  const removeFromCart = () => {
    if (!cartReqLoading) updateCart("REMOVE_FROM_CART");
  };

  const moveToWishlist = () => {
    if (!cartReqLoading && !wishlistReqLoading) {
      updateWishlist("ADD_TO_WISHLIST", false);
      updateCart("REMOVE_FROM_CART", 1, false, false);
      successNotification("Moved to wishlist!");
    }
  };

  const removeFromWishlist = () => {
    if (!wishlistReqLoading) updateWishlist("REMOVE_FROM_WISHLIST");
  };

  const updateWishlist = async (
    action,
    showNotification = true,
    showLoader = true
  ) => {
    try {
      if (showLoader) setWishlistReqLoading(true);
      const postBody = {
        action,
        bookId: book._id,
        format: "paperback",
      };
      axios
        .post(
          `https://fact-fiction.herokuapp.com/wishlists/${wishlist.id}`,
          postBody
        )
        .then(({ data: { success, wishlist, message } }) => {
          dataDispatch({ type: "UPDATE_WISHLIST", payload: wishlist.items });
          if (showNotification) {
            if (action === "ADD_TO_WISHLIST") {
              if (message) successNotification(message);
              else successNotification("Added to wishlist!");
            } else if (action === "REMOVE_FROM_WISHLIST") {
              successRemoveNotification("Removed from wishlist!");
            }
          }
          setWishlistReqLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {cartVersion && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <Link to={`/book/${book._id}`} className="nav-link">
              <div className="product-details__cover">
                <img src={book.covers[0]} alt="" />
              </div>
            </Link>
            <Link to={`/book/${book._id}`} className="nav-link">
              <div className="product-details__name">
                {/* <div className="product-details__title">{book.title}</div> */}

                <ClampLines
                  text={book.name}
                  id={book._id}
                  lines={1}
                  buttons={false}
                  className="product-details__title"
                />
                <div className="product-details__author">{book.authors}</div>
                <div className="product-details__price">
                  <div className="product-details__selling-price">
                    {/* ₹{(
                                    book.price[0] -
                                    (book.price[0] * book.discount[0]) / 100
                                ).toFixed(2)} */}
                    ₹{sellingPrice}
                  </div>

                  {book.formats[0].discount !== 0 && (
                    <div className="product-details__original-price">
                      ₹{book.formats[0].price}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="product-quantity-wrapper book-quantity-counter">
            <button className="counter-btn" onClick={() => updateQuantity(-1)}>
              -
            </button>
            <div className="counter-value">{bookQuantity}</div>
            <button className="counter-btn" onClick={() => updateQuantity(1)}>
              +
            </button>
          </div>
          <div className="total-amount-wrapper">
            ₹{+(bookQuantity * sellingPrice).toFixed(2)}
          </div>
          <div className="actions-wrapper">
            <button
              className="btn btn--dark btn--sm btn--outlined btn-move-to-wishlist"
              onClick={moveToWishlist}
            >
              {wishlistReqLoading ? (
                <ClipLoader
                  color={"#a0a0a0"}
                  loading={wishlistReqLoading}
                  size={24}
                />
              ) : (
                "Move to Wishlist"
              )}
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button
              className="btn btn--danger btn--sm btn-remove"
              onClick={removeFromCart}
            >
              {cartReqLoading ? (
                <ClipLoader
                  color={"#f5f5f5"}
                  loading={cartReqLoading}
                  size={24}
                />
              ) : (
                "Remove"
              )}
            </button>
          </div>
        </div>
      )}
      {wishlistVersion && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <Link to={`/book/${book._id}`} className="nav-link">
              <div className="product-details__cover">
                <img src={book.covers[0]} alt="" />
              </div>
            </Link>
            <Link to={`/book/${book._id}`} className="nav-link">
              <div className="product-details__name">
                {/* <div className="product-details__title">{book.title}</div> */}

                <ClampLines
                  text={book.name}
                  id={book._id}
                  lines={1}
                  buttons={false}
                  className="product-details__title"
                />
                <div className="product-details__author">{book.authors}</div>
              </div>
            </Link>
          </div>

          <div className="product-price-wrapper">
            <div className="product-price__selling-price">
              {/* ₹{(
                                    book.price[0] -
                                    (book.price[0] * book.discount[0]) / 100
                                ).toFixed(2)} */}
              ₹{sellingPrice}
            </div>

            {book.formats[0].discount !== 0 && (
              <div className="product-price__original-price">
                ₹{book.formats[0].price}
              </div>
            )}
          </div>
          <div className="product-availability-wrapper">In Stock</div>
          <div className="actions-wrapper">
            <button
              className="btn btn--dark btn--sm btn--outlined btn-move-to-cart"
              onClick={addToCart}
            >
              {cartReqLoading ? (
                <ClipLoader
                  color={"#a0a0a0"}
                  loading={cartReqLoading}
                  size={24}
                />
              ) : (
                "Add to Cart"
              )}
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button
              className="btn btn--danger btn--sm btn-remove"
              onClick={removeFromWishlist}
            >
              {wishlistReqLoading ? (
                <ClipLoader
                  color={"#f5f5f5"}
                  loading={wishlistReqLoading}
                  size={24}
                />
              ) : (
                "Remove"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
