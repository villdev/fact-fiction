import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClampLines from "react-clamp-lines";
import BannerCarousel from "../components/BannerCarousel";
import { useData } from "../context/DataProvider";
import ThumbnailView from "../components/ThumbnailView";

export default function Home() {
  const {
    state: { banners },
    dispatch: dataDispatch,
  } = useData();

  const [trendingBooks, setTrendingBooks] = useState([]);
  const [bestsellerBooks, setBestsellerBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  const getNewBooks = async () => {
    try {
      dataDispatch({ type: "SHOW_LOADER" });
      const {
        data: {
          success,
          paginatedBooks: { books },
        },
      } = await axios.get(
        "https://fact-fiction.herokuapp.com/books?page=3&results=4"
      );
      if (success) {
        setNewBooks([...books]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getTrendingBooks = async () => {
    try {
      const {
        data: {
          success,
          paginatedBooks: { books },
        },
      } = await axios.get(
        "https://fact-fiction.herokuapp.com/books?page=1&results=4"
      );
      if (success) {
        setTrendingBooks([...books]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getBestsellerBooks = async () => {
    try {
      const {
        data: {
          success,
          paginatedBooks: { books },
        },
      } = await axios.get(
        "https://fact-fiction.herokuapp.com/books?page=2&results=5"
      );
      if (success) {
        setBestsellerBooks([...books]);
        dataDispatch({ type: "HIDE_LOADER" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewBooks();
    getTrendingBooks();
    getBestsellerBooks();
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="home-page-wrapper container-75">
        {/* {banners.length > 0 && <BannerCarousel content={banners} />} */}
        <BannerCarousel content={banners} />
        <div className="featured-cards-wrapper">
          <div className="featured-card">
            <svg
              className="featured-card__img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                // fill="#333333"
              />
            </svg>

            <div className="featured-card__text">
              <span className="featured-card__highlight">Discover</span> our
              fiction collection
            </div>
          </div>
          <div className="featured-card">
            <svg
              className="featured-card__img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                // fill="#333333"
              />
            </svg>
            <div className="featured-card__text">
              <span className="featured-card__highlight">Recommendations</span>{" "}
              for you
            </div>
          </div>
        </div>
        <div className="home-page-section">
          <div className="home-page-section__subtitle">Trending</div>
          <div className="home-page-section__content">
            <ThumbnailView
              // booksData={trendingBooksData}
              booksData={trendingBooks}
              maxDisplay={4}
              maxBooksInRow={4}
              title={"Trending"}
              seeAllLink={"/trending"}
            />
          </div>
        </div>
        <div className="home-page-section--40-60">
          <div className="home-page-section">
            <div className="home-page-section__subtitle">
              Genres{" "}
              <button className="btn btn--sm btn--rounded btn--link btn-see-all--link">
                See All{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                    // fill="#333333"
                  />
                </svg>
              </button>
            </div>
            <div className="home-page-section__content">
              <div className="genres-wrapper">
                {/* <div className="genre"><Link> Fiction</Link></div> */}
                <div className="genre">
                  {/* <Link to="/genre" className="genre-mosiac-link"> */}{" "}
                  Fiction
                  {/* </Link> */}
                </div>
                <div className="genre">Romance</div>
                <div className="genre">YA</div>
                <div className="genre">Non-Fiction</div>
                <div className="genre">Crime, Thriller &#38; Mystery</div>
                <div className="genre">Business &#38; Economics</div>
                <div className="genre">Textbooks</div>
              </div>
            </div>
          </div>
          <div className="home-page-section">
            <div className="home-page-section__subtitle">
              Bestsellers{" "}
              <button className="btn btn--sm btn--rounded btn--link btn-see-all--link">
                See All{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                    // fill="#333333"
                  />
                </svg>
              </button>
            </div>
            <div className="home-page-section__content">
              <div className="bestsellers-wrapper">
                {/* {bestsellersBookData.map((book) => ( */}
                {bestsellerBooks.map((book, index) => (
                  <Link
                    key={book._id}
                    to={`/book/${book._id}`}
                    className="nav-link"
                  >
                    <div key={book._id} className="bestseller">
                      <div className="bestseller__ranking">0{index + 1}</div>
                      <img
                        // src={bookImg1}
                        src={book.covers[0]}
                        alt=""
                        className="bestseller__cover"
                      />
                      <div className="bestseller__details">
                        {/* <div className="bestseller__name">{book.title}</div> */}
                        <ClampLines
                          text={book.name}
                          id={book._id}
                          lines={1}
                          buttons={false}
                          className="bestseller__name"
                        />
                        <div className="bestseller__author">{book.authors}</div>
                      </div>
                      <div className="bestseller__price">
                        <div className="bestseller__selling-price">
                          ₹
                          {(
                            book.formats[0].price -
                            (book.formats[0].price * book.formats[0].discount) /
                              100
                          ).toFixed(2)}
                        </div>
                        {book.formats[0].discount !== 0 && (
                          <div className="bestseller__original-price">
                            ₹{book.formats[0].price}
                          </div>
                        )}
                      </div>
                      <div className="bestseller__more-actions">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                            // fill="#333333"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-section">
          <div className="home-page-section__subtitle">New</div>
          <div className="home-page-section__content">
            <ThumbnailView
              // booksData={newBooksData}
              booksData={newBooks}
              maxDisplay={4}
              maxBooksInRow={4}
              title={"New"}
              seeAllLink={"/new"}
            />
          </div>
        </div>
        {/* {banners.length > 0 && <BannerCarousel content={banners.slice(0, 1)} />} */}
        {banners.length > 0 && <BannerCarousel content={[banners[2]]} />}
      </div>
      <Footer />
    </>
  );
}
