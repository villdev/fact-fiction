import React from "react";
import ThumbnailBook from "./ThumbnailBook";

export default function ThumbnailView({
  booksData,
  title,
  maxDisplay,
  maxBooksInRow,
  seeAllLink,
}) {
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
    </div>
  );
}
