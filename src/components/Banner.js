import React, { useState } from "react";

export default function Banner({ content }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const changeBanner = (id) => {
    setCurrentBanner(id - 1);
  };
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="banner__content">
          <div className="banner__title">{content[currentBanner].title}</div>
          <div className="banner__subheading ">
            {content[currentBanner].subHeading}
          </div>
          <div className="banner__description">
            {content[currentBanner].description}
          </div>
          <button className="btn btn--dark btn--sm btn-banner">
            {content[currentBanner].button}
          </button>
          <div className="banner__nav">
            {content.map(({ id }) => {
              return (
                <div
                  key={id}
                  className={
                    content[currentBanner].id === id
                      ? "banner__nav-btn active-banner"
                      : "banner__nav-btn"
                  }
                  onClick={() => changeBanner(id)}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="banner__img">{content[0].image}</div>
      </div>
    </div>
  );
}
