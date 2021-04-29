import React from "react";
import ListBookActions from "./ListBookActions";

export default function BookActionsView({ cart, wishlist, booksData }) {
  return (
    <div className="book-actions-view">
      {/* <div className="book-actions-view__header">
        {cart && (
          <>
            <div>Product</div>
            <div>Quantity</div>
            <div>Total Amount</div>
          </>
        )}
        {wishlist && (
          <>
            <div>Product</div>
            <div>Price</div>
            <div>Availability</div>
          </>
        )}
      </div> */}
      <div className="book-actions-view__content">
        {booksData.map((book) => (
          <ListBookActions
            key={book.id}
            cart={cart}
            wishlist={wishlist}
            bookData={book}
          />
        ))}
      </div>
    </div>
  );
}
