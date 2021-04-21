import React, { useState } from "react";
import ThumbnailBook from "./ThumbnailBook";

export default function ThumbnailView({
  booksData,
  title,
  maxDisplay,
  maxBooksInRow,
  seeAllLink,
  paginate,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const limitedBooksData = booksData.slice(0, maxDisplay);
  //! we can also make it so that the api that returns the data sends only 4 books, and remove above part
  const thumbnailViewStyle = {
    "--max-items-in-row": maxBooksInRow,
  };
  return (
    <div className="thumbnail-view-wrapper">
      <div className="thumbnail-view" style={thumbnailViewStyle}>
        {limitedBooksData.map((book) => (
          <ThumbnailBook key={book.id} bookData={book} />
        ))}
      </div>
      {seeAllLink && (
        <button className="btn btn--black btn--outlined btn--sm btn-see-all">
          See All {title}
        </button>
      )}
      {/* if there it is filtered page/need paginate, and books to display is more than max can be displayed on 1 pg, use paginate */}
      {paginate && maxDisplay < booksData.length && (
        <div className="paginate">
          <div className="btn-paginate paginate-prev">
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
          <div className="paginate-pages-wrapper">
            <div className="btn-paginate-page paginate-active-page">1</div>
            <div className="btn-paginate-page">2</div>
            <div className="btn-paginate-page">3</div>
          </div>
          <div className="btn-paginate paginate-next">
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
        </div>
      )}
    </div>
  );
}
