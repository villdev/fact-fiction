import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ bannerContent }) {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__title">{bannerContent.title}</div>
        <div className="banner__subheading ">{bannerContent.subTitle}</div>
        <div className="banner__description">{bannerContent.description}</div>
        <Link to={bannerContent.link} className="nav-link">
          <button className="btn btn--dark btn--sm btn-banner">
            {bannerContent.buttonText}
          </button>
        </Link>
        {/* <div className="banner__nav">
            {bannerContent.map(({ id }) => {
              return (
                <div
                  key={id}
                  className={
                    bannerContent.id === id
                      ? "banner__nav-btn active-banner"
                      : "banner__nav-btn"
                  }
                  onClick={() => changeBanner(id)}
                ></div>
              );
            })}
          </div> */}
      </div>
      <div className="banner__img">
        <img src={bannerContent.coverImage} alt="" />
      </div>
    </div>
  );
}
