import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThumbnailBook from "./ThumbnailBook";

export default function ThumbnailView({
  booksData,
  title,
  maxDisplay,
  maxBooksInRow,
  seeAllLink,
  paginationData,
  setPaginationData,
}) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const limitedBooksData = booksData.slice(0, maxDisplay);
  //! we can also make it so that the api that returns the data sends only 4 books, and remove above part
  const thumbnailViewStyle = {
    "--max-items-in-row": maxBooksInRow,
  };
  const changeCurrentPage = (pageNumber) => {
    setPaginationData((prevData) => {
      return {
        ...prevData,
        currentPage: pageNumber,
      };
    });
  };

  return (
    <div className="thumbnail-view-wrapper">
      <div className="thumbnail-view" style={thumbnailViewStyle}>
        {/* {limitedBooksData.map((book) => ( */}
        {booksData.map((book) => (
          // <Link key={book.id} to="/book" className="nav-link">
          <ThumbnailBook key={book._id} bookData={book} />
          // </Link>
        ))}
      </div>
      {seeAllLink && (
        <Link to={seeAllLink} className="see-all-nav-link">
          <button className="btn btn--black btn--outlined btn--sm btn-see-all">
            See All {title}
          </button>
        </Link>
      )}
      {/* if there it is filtered page/need paginate, and books to display is more than max can be displayed on 1 pg, use paginate */}
      {/* {paginationData && maxDisplay < booksData.length && ( */}
      {paginationData && (
        <div className="paginate">
          {paginationData.previous && (
            <Link
              to={{
                pathname: `/${title.toLowerCase().split(" ")[0]}`,
                search: `?sort=${paginationData.sort}&page=${paginationData.previous.page}&results=${paginationData.results}`,
              }}
              className="nav-link"
              onClick={() => changeCurrentPage(paginationData.previous.page)}
            >
              <div
                className="btn-paginate paginate-prev"
                // onClick={() => changeCurrentPage(paginationData.previous.page)}
              >
                <svg
                  className="paginate-btn-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    // fill="#333333"
                  />
                </svg>
              </div>
            </Link>
          )}
          <div className="paginate-pages-wrapper">
            {[
              ...Array(
                Math.ceil(paginationData.totalResults / paginationData.results)
              ),
            ].map((_elementInArray, index) => {
              return (
                <Link
                  to={{
                    pathname: `/${title.toLowerCase().split(" ")[0]}`,
                    search: `?sort=${paginationData.sort}&page=${
                      index + 1
                    }&results=${paginationData.results}`,
                  }}
                  className="nav-link"
                  onClick={() => changeCurrentPage(index + 1)}
                  key={index}
                >
                  <div
                    key={index}
                    className={
                      paginationData.currentPage == index + 1
                        ? "btn-paginate-page paginate-active-page"
                        : "btn-paginate-page"
                    }
                    // onClick={() => changeCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </div>
                </Link>
              );
            })}
            {/* <div className="btn-paginate-page paginate-active-page">1</div>
            <div className="btn-paginate-page">2</div>
            <div className="btn-paginate-page">3</div> */}
          </div>
          {paginationData.next && (
            <Link
              to={{
                pathname: `/${title.toLowerCase().split(" ")[0]}`,
                search: `?sort=${paginationData.sort}&page=${paginationData.next.page}&results=${paginationData.results}`,
              }}
              className="nav-link"
              onClick={() => changeCurrentPage(paginationData.next.page)}
            >
              <div
                className="btn-paginate paginate-next"
                // onClick={() => changeCurrentPage(paginationData.next.page)}
              >
                <svg
                  className="paginate-btn-icon"
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
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
