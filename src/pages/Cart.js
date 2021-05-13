import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
// import { productData } from "../components/productData";
import BookActionsView from "../components/BookActionsView";
import { useData } from "../context/DataProvider";

export default function Cart() {
  const navigate = useNavigate();
  // const cartItems = productData.slice(0, 4);
  const {
    state: { cart },
  } = useData();
  return (
    <>
      <Header />
      <div className="cart-page-wrapper container-75">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
              fill="#333333"
            />
          </svg>
          Continue Shopping
        </button>
        <div className="cart-page__header">Shopping Cart</div>
        <div className="cart-page__content">
          <div className="cart-page__cart-wrapper">
            <div className="cart-total-number">
              You have <span>{cart.items.length} items</span> in your cart
            </div>
            <div className="cart">
              <BookActionsView cart={true} booksData={cart.items} />
            </div>
          </div>
          {cart.items.length !== 0 && (
            <div className="cart-summary-wrapper">
              <div className="cart-summary__header">Shopping Cart Total</div>
              <div className="cart-summary__content">
                <div className="cart-summary__subtotal">
                  {/* Subtotal <span>₹1000.00</span> */}
                  Subtotal <span>₹{cart.subtotal}</span>
                </div>
                <div className="cart-summary__delivery">
                  {/* Delivery Charges <span>+ ₹1000.00</span> */}
                  Delivery Charges <span>₹{cart.deliveryCharges}</span>
                </div>
                <div className="cart-summary__discount">
                  Discount <span>- ₹{cart.discount}</span>
                </div>
                <div className="cart-summary__total">
                  Total <span>₹{cart.total}</span>
                </div>
                <div className="cart-summary__promo-wrapper">
                  <div className="promo__header">Promo Code</div>
                  <div className="promo__content">
                    <input
                      type="text"
                      name="promoCode"
                      id="promoCode"
                      placeholder="Enter code"
                    />
                    <button className="btn btn--black btn--outlined btn--sm btn-apply-promo">
                      Apply
                    </button>
                  </div>
                </div>
                <Link to="/checkout" className="nav-link">
                  <button className="btn btn--success btn--sm btn-checkout">
                    ₹{cart.total}{" "}
                    <span>
                      Checkout{" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.85C16.55 8.53 16.01 8.76 16.01 9.2V11V11Z"
                          // fill="#333333"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
