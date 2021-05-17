import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import PuffLoader from "react-spinners/PuffLoader";
import { useData } from "../context/DataProvider";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Path from "../components/Path";
// import ClampLines from "react-clamp-lines";
// import bookImg1 from "../images/covers/hptps.jpg";
import ThumbnailView from "../components/ThumbnailView";
import { successNotification, successRemoveNotification } from "../utils/toast";
import { productData as booa } from "../components/productData";

export default function Book() {
  // const similarBooksData = [...booa];
  const [bookQuantity, setBookQuantity] = useState(1);
  const [wishlistReqLoading, setWishlistReqLoading] = useState(false);
  const [cartReqLoading, setCartReqLoading] = useState(false);
  const {
    state: { wishlist, cart },
    dispatch: dataDispatch,
  } = useData();

  const [similarBooks, setSimilarBooks] = useState([]);
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  const updateBookQuantity = (value) => {
    setBookQuantity((prevQuantity) => {
      if (
        prevQuantity + value !== 0 &&
        prevQuantity + value !== book.formats[0].stock + 1
      ) {
        return prevQuantity + value;
      } else {
        return prevQuantity;
      }
    });
  };

  const presentInWishlist = (id) => {
    if (wishlist.items.find((item) => item.book._id === id)) return true;
    else return false;
  };
  const presentInCart = (id) => {
    if (cart.items.find((item) => item.book._id === id)) return true;
    else return false;
  };

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

  const addToCart = (action, modifiedQuantity, showNotification = true) => {
    if (!cartReqLoading) {
      updateCart(action, modifiedQuantity, showNotification);
      setBookQuantity(1);
    }
  };
  const toggleWishlist = () => {
    if (!wishlistReqLoading) {
      if (presentInWishlist(book._id)) updateWishlist("REMOVE_FROM_WISHLIST");
      else updateWishlist("ADD_TO_WISHLIST");
    }
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

  const getBook = async () => {
    try {
      dataDispatch({ type: "SHOW_LOADER" });
      const {
        data: { success, book: currentBook },
      } = await axios.get(`https://fact-fiction.herokuapp.com/books/${bookId}`);
      if (success) {
        setBook(currentBook);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSimilarBooks = async () => {
    try {
      const {
        data: {
          success,
          paginatedBooks: { books },
        },
      } = await axios.get(
        "https://fact-fiction.herokuapp.com/books?page=2&results=8"
      );
      if (success) {
        setSimilarBooks([...books]);
        dataDispatch({ type: "HIDE_LOADER" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBook();
    getSimilarBooks();
  }, [bookId]);
  return (
    <>
      <Header />
      <div className="product-page-wrapper container-75">
        {book && (
          <>
            <Path pathHistory={["Home", book.name]} />
            <div className="product-display-wrapper">
              <div className="product-display__imp-details">
                <div className="product-display__covers">
                  <div className="book-covers">
                    {book.covers.map((cover, index) => (
                      <div
                        key={index}
                        className={
                          index === 0
                            ? "book-cover book-cover--active"
                            : "book-cover"
                        }
                      >
                        <img src={cover} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="book-cover-display">
                    <img src={book.covers[0]} alt="" />
                    {book.formats[0].discount !== 0 && (
                      <div className="t-book-badge">
                        -{book.formats[0].discount}%
                      </div>
                    )}
                    <div className="cover-dot">
                      {book.covers.length > 1 &&
                        book.covers.map((cover, index) => (
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
                  <div className="book-title">{book.name}</div>
                  <div className="book-author">{book.authors}</div>
                  <div className="book-rating">
                    <div
                      className="stars"
                      // style={{ "--rating": productData.rating[0] }}
                      style={{ "--rating": 4.2 }}
                      aria-label="Rating of this product is 2.3 out of 5."
                    ></div>{" "}
                    <div className="book-rating--number">
                      {/* ({productData.rating[0]}) */}
                      (4.2)
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
                            book.formats[0].price -
                            (book.formats[0].price * book.formats[0].discount) /
                              100
                          ).toFixed(2)}
                        </span>
                        {book.formats[0].discount !== 0 && (
                          <span className="book-original-price">
                            ₹{book.formats[0].price}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="book-format-wrapper">
                      Format:{" "}
                      <div className="book-formats">
                        {book.formats.map((format, index) => (
                          <span
                            key={index}
                            className={
                              index === 0
                                ? "book-format book-format--active"
                                : "book-format"
                            }
                          >
                            {format.type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="book-wishlist-wrapper">
                      Wishlist:{" "}
                      <div
                        className="book-wishlist-btn"
                        onClick={toggleWishlist}
                      >
                        {wishlistReqLoading ? (
                          <PuffLoader
                            color={
                              presentInWishlist(book._id)
                                ? "#a0a0a0"
                                : "#dc2626"
                            }
                            loading={wishlistReqLoading}
                            size={24}
                          />
                        ) : (
                          <svg
                            className="book-like-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={
                              presentInWishlist(book._id)
                                ? "#dc2626"
                                : "#a0a0a0"
                            }
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                              // fill="#333333"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="product-display-separator"></div>
                  <div className="book-buy-wrapper">
                    <div className="book-quantity-counter-wrapper">
                      Quantity:
                      <div className="book-quantity-counter">
                        <button
                          className="counter-btn"
                          onClick={() => updateBookQuantity(-1)}
                        >
                          -
                        </button>
                        <div className="counter-value">{bookQuantity}</div>
                        <button
                          className="counter-btn"
                          onClick={() => updateBookQuantity(1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* <div className="product-display-separator--vertical"></div> */}
                    <Link to="/cart" className="btn-buy-now--link">
                      <button
                        className="btn btn--dark btn--sm btn-buy-now"
                        onClick={() =>
                          addToCart("ADD_TO_CART", bookQuantity, false)
                        }
                      >
                        Buy Now
                      </button>
                    </Link>
                    {presentInCart(book._id) ? (
                      <Link to="/cart" className="btn-buy-now--link">
                        <button className="btn btn--black btn--outlined btn--sm btn-add-to-cart">
                          Go to Cart
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="btn btn--black btn--outlined btn--sm btn-add-to-cart"
                        onClick={() => addToCart("ADD_TO_CART", bookQuantity)}
                      >
                        {cartReqLoading ? (
                          <ClipLoader
                            // color={"#1F2937"}
                            color={"#a0a0a0"}
                            loading={cartReqLoading}
                            size={24}
                          />
                        ) : (
                          "Add to Cart"
                        )}
                      </button>
                    )}
                    {/* <button
                      className="btn btn--black btn--outlined btn--sm btn-add-to-cart"
                      onClick={() => addToCart("ADD_TO_CART", bookQuantity)}
                    >
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="product-display__full-details">
                <div className="product-display__synopsis">
                  <div className="product-display__full-details-header">
                    Synopsis:
                  </div>
                  <div className="product-display__full-details-content book-synopsis">
                    {/* {productData.synopsis.map((para, index) => (
                  <p key={index}>{para}</p>
                ))} */}
                    {/* <p>{book.synopsis}</p> */}
                    {book.synopsis.split("<br/>").map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
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
                        {book.language}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">Pages:</div>
                      <div className="book-misc-detail__content">
                        {book.pages}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">
                        Publish Date:
                      </div>
                      <div className="book-misc-detail__content">
                        {book.publishDate.slice(0, -14)}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">Publisher:</div>
                      <div className="book-misc-detail__content">
                        {book.publisher}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">ISBN13:</div>
                      <div className="book-misc-detail__content">
                        {book.isbn13}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">
                        Dimensions:
                      </div>
                      <div className="book-misc-detail__content">
                        {book.dimensions}
                      </div>
                    </div>
                    <div className="book-misc-detail">
                      <div className="book-misc-detail__header">Weight:</div>
                      <div className="book-misc-detail__content">
                        {book.weight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-display__review-wrapper">
                <div className="book-review-stats-wrapper">
                  <div className="review-stats__header">Customer reviews</div>
                  <div className="review-stats__content">
                    <div className="review-stats--overall">
                      <div className="review-stats--overall-rating">
                        {booa[0].rating[0]}
                      </div>
                      <div className="review-state--overall-stars">
                        <div
                          className="stars"
                          style={{
                            "--rating": booa[0].rating[0],
                            // "--star-background": "#76DB98",
                            "--star-size": "1.5rem",
                          }}
                          aria-label="Rating of this product out of 5."
                        ></div>
                      </div>
                      <div className="review-state--overall-reviews">
                        {booa[0].rating[1]} reviews
                      </div>
                    </div>
                    <div className="review-stats--star-wrapper">
                      <div className="review-stats--star">
                        <div className="review-star">5</div>
                        <div className="review-bar">
                          <div
                            className="review-bar__fill"
                            style={{
                              "--percent": "75%",
                              "--fill-color": "#76DB98",
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                        <div className="review-star--total">
                          <div className="review-percentage">75%</div>
                          <div className="review-total">982</div>
                        </div>
                      </div>
                      <div className="review-stats--star">
                        <div className="review-star">4</div>
                        <div className="review-bar">
                          <div
                            className="review-bar__fill"
                            style={{
                              "--percent": "16%",
                              "--fill-color": "#B7EA83",
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                        <div className="review-star--total">
                          <div className="review-percentage">16%</div>
                          <div className="review-total">205</div>
                        </div>
                      </div>
                      <div className="review-stats--star">
                        <div className="review-star">3</div>
                        <div className="review-bar">
                          <div
                            className="review-bar__fill"
                            style={{
                              "--percent": "5%",
                              "--fill-color": "#F6D757",
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                        <div className="review-star--total">
                          <div className="review-percentage">5%</div>
                          <div className="review-total">65</div>
                        </div>
                      </div>
                      <div className="review-stats--star">
                        <div className="review-star">2</div>
                        <div className="review-bar">
                          <div
                            className="review-bar__fill"
                            style={{
                              "--percent": "1%",
                              "--fill-color": "#FBB851",
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                        <div className="review-star--total">
                          <div className="review-percentage">1%</div>
                          <div className="review-total">17</div>
                        </div>
                      </div>
                      <div className="review-stats--star">
                        <div className="review-star">1</div>
                        <div className="review-bar">
                          <div
                            className="review-bar__fill"
                            style={{
                              "--percent": "3%",
                              "--fill-color": "#F17A54",
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                        <div className="review-star--total">
                          <div className="review-percentage">3%</div>
                          <div className="review-total">46</div>
                        </div>
                      </div>
                    </div>
                    <div className="customer-review-wrapper">
                      <div className="customer-review__header">
                        Review this product
                      </div>
                      <div className="customer-review__content">
                        Share your thoughts with other customers.
                        <button className="btn btn--dark btn--sm btn--outlined btn-write-review">
                          Write a review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="book-reviews-wrapper">
                  <div className="book-reviews__header">
                    Reviews
                    <div className="review-filter-btn">
                      <select name="review-filter" id="review-filter">
                        <option value="top">Top Reviews</option>
                        <option value="recent">Recent Reviews</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-reviews__content">
                    {booa[0].reviews.map((review, index) => (
                      <div key={index} className="book-review-wrapper">
                        <div className="book-review__header">
                          <div className="book-review__user-avatar avatar bg-red-500 text-white">
                            SK
                          </div>
                          <div className="book-review__details-wrapper">
                            <div className="book-review__username">
                              {review.name}
                            </div>
                            <div className="book-review__details">
                              <div className="book-review__user-rating">
                                <div
                                  className="stars"
                                  style={{
                                    "--rating": review.rating,
                                    // "--star-background": "76DB98",
                                  }}
                                  aria-label="Rating of this product out of 5."
                                ></div>
                                {review.rating}
                              </div>
                              <div className="book-review__rating-date">
                                1 month ago
                              </div>
                              {/* ! create function to get above time from date: 07-04-2021 */}
                            </div>
                          </div>
                        </div>
                        <div className="book-review__content">
                          {review.content}
                        </div>
                        <button className="btn-agree-review">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9H2V20ZM21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.1126 3.23961 14.8156 2.82789 14.46 2.47L14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.67C7.00264 18.2889 7.25035 18.8815 7.6889 19.3182C8.12744 19.7548 8.72112 20 9.34 20H17.45C18.15 20 18.81 19.63 19.17 19.03L21.83 12.88V12.88Z"
                              // fill="#333333"
                            />
                          </svg>
                          Agree <span>{index + 4}</span>
                        </button>
                      </div>
                    ))}
                    <button className="btn btn--dark btn--sm btn--outlined btn-view-all-review">
                      View all reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-page-section">
              <div className="home-page-section__subtitle">Similar Books</div>
              <div className="home-page-section__content">
                <ThumbnailView
                  // booksData={similarBooksData}
                  booksData={similarBooks}
                  maxDisplay={8}
                  maxBooksInRow={4}
                  title={"Similar Books"}
                  // seeAllLink={"/frontend-endpoint-that-gives-similar-books"}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
