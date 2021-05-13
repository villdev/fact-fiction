import React, { useState } from "react";
import axios from "axios";
import { useData } from "../context/DataProvider";
import ClampLines from "react-clamp-lines";

export default function ListBookActions({
  cartVersion,
  wishlistVersion,
  bookData: { book, quantity, format },
}) {
  // console.log(book);
  const [bookQuantity, setBookQuantity] = useState(quantity);
  const {
    state: { wishlist, cart },
    dispatch: dataDispatch,
  } = useData();
  const sellingPrice = (
    book.formats[0].price -
    (book.formats[0].price * book.formats[0].discount) / 100
  ).toFixed(2);

  const updateCart = async (action, modifiedQuantity) => {
    try {
      const postBody = {
        action,
        bookId: book._id,
        format: "paperback",
        quantity: modifiedQuantity || quantity,
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

  const updateQuantity = (value) => {
    setBookQuantity((prevQuantity) => {
      if (
        prevQuantity + value !== 0 &&
        prevQuantity + value !== book.formats[0].stock + 1
      ) {
        updateCart("UPDATE_QUANTITY", prevQuantity + value);
        return prevQuantity + value;
      } else {
        return prevQuantity;
      }
    });
  };

  const moveToWishlist = () => {
    updateWishlist("ADD_TO_WISHLIST");
    updateCart("REMOVE_FROM_CART");
  };

  const updateWishlist = async (action) => {
    try {
      const postBody = {
        action,
        bookId: book._id,
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
  return (
    <>
      {cartVersion && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <div className="product-details__cover">
              <img src={book.covers[0]} alt="" />
            </div>
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
              Move to Wishlist
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button
              className="btn btn--danger btn--sm btn-remove"
              onClick={() => updateCart("REMOVE_FROM_CART")}
            >
              Remove
            </button>
          </div>
        </div>
      )}
      {wishlistVersion && (
        <div className="list-book-actions">
          <div className="product-details-wrapper">
            <div className="product-details__cover">
              <img src={book.covers[0]} alt="" />
            </div>
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
            <button className="btn btn--dark btn--sm btn--outlined btn-move-to-cart">
              Add to Cart
            </button>
            {/* <button className="btn btn--dark btn--sm btn-remove">Remove</button> */}
            <button
              className="btn btn--danger btn--sm btn-remove"
              onClick={() => updateWishlist("REMOVE_FROM_WISHLIST")}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
}
