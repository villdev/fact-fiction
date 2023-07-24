import React from "react";
import { useData } from "../context/DataProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { productData } from "../components/productData";
import BookActionsView from "../components/BookActionsView";

export default function Wishlist() {
  const navigate = useNavigate();
  // const wishlistItems = productData.slice(0, 4);
  const {
    state: { wishlist },
  } = useData();
  return (
    <>
      <Header />
      <div className="wishlist-page-wrapper container-75">
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
        <div className="wishlist-page__header">Wishlist</div>
        <div className="wishlist-page__content">
          <div className="wishlist-page__cart-wrapper">
            <div className="wishlist-total-number">
              You have <span>{wishlist.items.length} items</span> in your
              wishlist.
            </div>
            <div className="wishlist">
              <BookActionsView wishlist={true} booksData={wishlist.items} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
