import React, { useState } from "react";
import Path from "./Path";
import { productData } from "./productData";
import ThumbnailView from "./ThumbnailView";
import ClampLines from "react-clamp-lines";

// import { Range } from "rc-slider";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../css/customSliderStyle.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function FilteredPage({
  trending,
  newReleases,
  bestseller,
  genre,
  sale,
}) {
  const trendingBooksData = [...productData];
  const [priceRangeValues, setPriceRangeValues] = useState([0, 5000]);
  const setPriceRange = (sliderValues) => {
    setPriceRangeValues(sliderValues);
  };
  const setMinPriceRange = (sliderEvent) => {
    console.log(sliderEvent);
    setPriceRangeValues((prevValues) => [
      +sliderEvent.target.value.slice(1),
      prevValues[1],
    ]);
  };
  const setMaxPriceRange = (sliderEvent) => {
    setPriceRangeValues((prevValues) => [
      prevValues[0],
      +sliderEvent.target.value.slice(1),
    ]);
  };
  return (
    <div className="filtered-page-wrapper container-75">
      <Path pathHistory={["Home", "Trending"]} />
      <div className="filtered-page">
        <div className="filter-section-wrapper">
          {/* <div className="filter-section__header">Filters</div> */}
          <div className="filters-reset-wrapper">
            <div className="filters-reset-btn">Reset All Filters</div>
            <div className="filters-applied-wrapper">
              <div className="filter-applied">
                <div className="filter-applied__header">Category:</div>
                <div className="filter-applied__content">
                  <div className="filter-applied__details">
                    <div className="remove-filter-applied">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3 5.71C18.2075 5.6173 18.0976 5.54375 17.9766 5.49357C17.8556 5.44338 17.726 5.41755 17.595 5.41755C17.464 5.41755 17.3343 5.44338 17.2134 5.49357C17.0924 5.54375 16.9825 5.6173 16.89 5.71L12 10.59L7.10999 5.7C7.01741 5.60742 6.9075 5.53398 6.78654 5.48387C6.66557 5.43377 6.53593 5.40798 6.40499 5.40798C6.27406 5.40798 6.14442 5.43377 6.02345 5.48387C5.90249 5.53398 5.79258 5.60742 5.69999 5.7C5.60741 5.79258 5.53397 5.90249 5.48387 6.02346C5.43376 6.14442 5.40797 6.27407 5.40797 6.405C5.40797 6.53593 5.43376 6.66558 5.48387 6.78654C5.53397 6.90751 5.60741 7.01742 5.69999 7.11L10.59 12L5.69999 16.89C5.60741 16.9826 5.53397 17.0925 5.48387 17.2135C5.43376 17.3344 5.40797 17.4641 5.40797 17.595C5.40797 17.7259 5.43376 17.8556 5.48387 17.9765C5.53397 18.0975 5.60741 18.2074 5.69999 18.3C5.79258 18.3926 5.90249 18.466 6.02345 18.5161C6.14442 18.5662 6.27406 18.592 6.40499 18.592C6.53593 18.592 6.66557 18.5662 6.78654 18.5161C6.9075 18.466 7.01741 18.3926 7.10999 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2135 18.5161C17.3344 18.5662 17.4641 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.4641 18.5662 17.3344 18.5161 17.2135C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71V5.71Z"
                          // fill="#333333"
                        />
                      </svg>
                    </div>
                    Fiction
                  </div>
                  <div className="filter-applied__details">
                    <div className="remove-filter-applied">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3 5.71C18.2075 5.6173 18.0976 5.54375 17.9766 5.49357C17.8556 5.44338 17.726 5.41755 17.595 5.41755C17.464 5.41755 17.3343 5.44338 17.2134 5.49357C17.0924 5.54375 16.9825 5.6173 16.89 5.71L12 10.59L7.10999 5.7C7.01741 5.60742 6.9075 5.53398 6.78654 5.48387C6.66557 5.43377 6.53593 5.40798 6.40499 5.40798C6.27406 5.40798 6.14442 5.43377 6.02345 5.48387C5.90249 5.53398 5.79258 5.60742 5.69999 5.7C5.60741 5.79258 5.53397 5.90249 5.48387 6.02346C5.43376 6.14442 5.40797 6.27407 5.40797 6.405C5.40797 6.53593 5.43376 6.66558 5.48387 6.78654C5.53397 6.90751 5.60741 7.01742 5.69999 7.11L10.59 12L5.69999 16.89C5.60741 16.9826 5.53397 17.0925 5.48387 17.2135C5.43376 17.3344 5.40797 17.4641 5.40797 17.595C5.40797 17.7259 5.43376 17.8556 5.48387 17.9765C5.53397 18.0975 5.60741 18.2074 5.69999 18.3C5.79258 18.3926 5.90249 18.466 6.02345 18.5161C6.14442 18.5662 6.27406 18.592 6.40499 18.592C6.53593 18.592 6.66557 18.5662 6.78654 18.5161C6.9075 18.466 7.01741 18.3926 7.10999 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2135 18.5161C17.3344 18.5662 17.4641 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.4641 18.5662 17.3344 18.5161 17.2135C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71V5.71Z"
                          // fill="#333333"
                        />
                      </svg>
                    </div>
                    Romance
                  </div>
                </div>
              </div>
              <div className="filter-applied">
                <div className="filter-applied__header">Format:</div>
                <div className="filter-applied__content">
                  <div className="filter-applied__details">
                    <div className="remove-filter-applied">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3 5.71C18.2075 5.6173 18.0976 5.54375 17.9766 5.49357C17.8556 5.44338 17.726 5.41755 17.595 5.41755C17.464 5.41755 17.3343 5.44338 17.2134 5.49357C17.0924 5.54375 16.9825 5.6173 16.89 5.71L12 10.59L7.10999 5.7C7.01741 5.60742 6.9075 5.53398 6.78654 5.48387C6.66557 5.43377 6.53593 5.40798 6.40499 5.40798C6.27406 5.40798 6.14442 5.43377 6.02345 5.48387C5.90249 5.53398 5.79258 5.60742 5.69999 5.7C5.60741 5.79258 5.53397 5.90249 5.48387 6.02346C5.43376 6.14442 5.40797 6.27407 5.40797 6.405C5.40797 6.53593 5.43376 6.66558 5.48387 6.78654C5.53397 6.90751 5.60741 7.01742 5.69999 7.11L10.59 12L5.69999 16.89C5.60741 16.9826 5.53397 17.0925 5.48387 17.2135C5.43376 17.3344 5.40797 17.4641 5.40797 17.595C5.40797 17.7259 5.43376 17.8556 5.48387 17.9765C5.53397 18.0975 5.60741 18.2074 5.69999 18.3C5.79258 18.3926 5.90249 18.466 6.02345 18.5161C6.14442 18.5662 6.27406 18.592 6.40499 18.592C6.53593 18.592 6.66557 18.5662 6.78654 18.5161C6.9075 18.466 7.01741 18.3926 7.10999 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2135 18.5161C17.3344 18.5662 17.4641 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.4641 18.5662 17.3344 18.5161 17.2135C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71V5.71Z"
                          // fill="#333333"
                        />
                      </svg>
                    </div>
                    Paperback
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filters-wrapper">
            <div className="filter-wrapper">
              <div className="filter__header">Price:</div>
              <div className="filter__content">
                <Range
                  min={0}
                  max={5000}
                  defaultValue={priceRangeValues}
                  step={100}
                  value={priceRangeValues}
                  onChange={setPriceRange}
                  tipFormatter={(value) => `₹${value}`}
                  trackStyle={[
                    { backgroundColor: "var(--black-color)", height: "3px" },
                  ]}
                  railStyle={{
                    backgroundColor: "var(--border)",
                    height: "2px",
                  }}
                  activeDotStyle={{
                    border: "1px solid rgba(128,128,128,0.3)",
                  }}
                />
                <div className="range-values-wrapper">
                  <div className="range-values">
                    {/* <input
                      value={`${priceRangeValues[0]}`}
                      onChange={setMinPriceRange}
                      className="range-value"
                    />
                    <span className="range-separator"></span>
                    <input
                      value={`${priceRangeValues[1]}`}
                      onChange={setMaxPriceRange}
                      className="range-value"
                      type="text"
                    /> */}
                    <span className="range-value">₹{priceRangeValues[0]}</span>{" "}
                    <span className="range-separator"></span>
                    <span className="range-value">₹{priceRangeValues[1]}</span>
                  </div>
                  <button className="btn btn--black btn--outlined btn--sm btn-set-price-range">
                    Go
                  </button>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Category:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" checked={true} />
                    <span>Fiction</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>Non-Fiction</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" checked={true} />
                    <span>Romance</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>Business & Economics</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>Textbooks</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Customer Rating:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>4★ & above</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>3★ & above</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>2★ & above</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>1★ & above</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Language:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>English</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Discount:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>10% or more</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>25% or more</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>35% or more</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>50% or more</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Format:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>Hardcover</span>
                  </label>
                </div>
                <div className="filter__content-item">
                  {" "}
                  <label className="input-checkbox">
                    <input type="checkbox" checked={true} />
                    <span>Paperback</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-wrapper">
              <div className="filter__header">Availability:</div>
              <div className="filter__content">
                <div className="filter__content-item">
                  <label className="input-checkbox">
                    <input type="checkbox" />
                    <span>Exclude out of stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filtered-page-section">
          <div className="filtered-page-section__subtitle">
            Trending
            <div className="filtered-showing-number-wrapper">
              Showing:{" "}
              <span>
                {"1"} - {"12"} of {productData.length}
              </span>
              Products
            </div>
            <div className="filtered-page-max-display-wrapper">
              <div className="filtered-page-max-display">
                {"12"}
                <svg
                  className="dropdown-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
                </svg>{" "}
                <div className="max-display-dropdown">
                  <div className="max-display-dropdown__item">3</div>
                  <div className="max-display-dropdown__item">12</div>
                  <div className="max-display-dropdown__item">24</div>
                  <div className="max-display-dropdown__item">48</div>
                </div>
              </div>
              <span>/ per page </span>
            </div>
            <div className="filtered-vertical-separator">&nbsp;</div>
            <div className="filtered-view-change-btns">
              <div className="view-change-btn active-view-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="view-btn-icon"
                >
                  <path d="M7.26671 4.21272H4.75727C4.61286 4.21279 4.47439 4.27018 4.37228 4.37229C4.27016 4.4744 4.21277 4.61288 4.21271 4.75728V7.26624C4.21277 7.41065 4.27016 7.54912 4.37228 7.65123C4.47439 7.75335 4.61286 7.81074 4.75727 7.8108H7.26647C7.41087 7.81074 7.54935 7.75335 7.65146 7.65123C7.75357 7.54912 7.81096 7.41065 7.81103 7.26624V4.75752C7.81106 4.68601 7.797 4.61519 7.76967 4.54911C7.74233 4.48303 7.70224 4.42298 7.6517 4.37239C7.60115 4.3218 7.54114 4.28166 7.47508 4.25427C7.40903 4.22687 7.33822 4.21275 7.26671 4.21272V4.21272Z" />
                  <path d="M13.2545 4.21272H10.7453C10.6009 4.21279 10.4624 4.27018 10.3603 4.37229C10.2582 4.4744 10.2008 4.61288 10.2007 4.75728V7.26624C10.2008 7.41065 10.2582 7.54912 10.3603 7.65123C10.4624 7.75335 10.6009 7.81074 10.7453 7.8108H13.2545C13.3989 7.81074 13.5374 7.75335 13.6395 7.65123C13.7416 7.54912 13.799 7.41065 13.799 7.26624V4.75752C13.7991 4.68599 13.785 4.61515 13.7577 4.54906C13.7303 4.48296 13.6902 4.4229 13.6396 4.37231C13.5891 4.32171 13.529 4.28158 13.4629 4.2542C13.3968 4.22682 13.326 4.21272 13.2545 4.21272V4.21272Z" />
                  <path d="M19.787 4.75728C19.787 4.61288 19.7296 4.4744 19.6275 4.37229C19.5254 4.27018 19.3869 4.21279 19.2425 4.21272H16.733C16.5886 4.21279 16.4502 4.27018 16.348 4.37229C16.2459 4.4744 16.1885 4.61288 16.1885 4.75728V7.26648C16.1885 7.41093 16.2458 7.54947 16.348 7.65163C16.4501 7.75379 16.5886 7.81122 16.733 7.81128H19.2422C19.3866 7.81122 19.5251 7.75383 19.6272 7.65171C19.7293 7.5496 19.7867 7.41113 19.7868 7.26672V4.75728H19.787V4.75728Z" />
                  <path d="M7.26671 10.2014H4.75727C4.61286 10.2015 4.47439 10.2589 4.37228 10.361C4.27016 10.4631 4.21277 10.6016 4.21271 10.746V13.2552C4.21277 13.3996 4.27016 13.5381 4.37228 13.6402C4.47439 13.7423 4.61286 13.7997 4.75727 13.7998H7.26647C7.41087 13.7997 7.54935 13.7423 7.65146 13.6402C7.75357 13.5381 7.81096 13.3996 7.81103 13.2552V10.7462C7.81106 10.6747 7.797 10.6039 7.76967 10.5378C7.74233 10.4717 7.70224 10.4117 7.6517 10.3611C7.60115 10.3105 7.54114 10.2704 7.47508 10.243C7.40903 10.2156 7.33822 10.2015 7.26671 10.2014V10.2014Z" />
                  <path d="M13.2545 10.2014H10.7453C10.6009 10.2015 10.4624 10.2589 10.3603 10.361C10.2582 10.4631 10.2008 10.6016 10.2007 10.746V13.2552C10.2008 13.3996 10.2582 13.5381 10.3603 13.6402C10.4624 13.7423 10.6009 13.7997 10.7453 13.7998H13.2545C13.3989 13.7997 13.5374 13.7423 13.6395 13.6402C13.7416 13.5381 13.799 13.3996 13.799 13.2552V10.7462C13.7991 10.6747 13.785 10.6039 13.7577 10.5378C13.7303 10.4717 13.6902 10.4116 13.6396 10.361C13.5891 10.3104 13.529 10.2703 13.4629 10.2429C13.3968 10.2155 13.326 10.2014 13.2545 10.2014V10.2014Z" />
                  <path d="M19.2425 10.2014H16.733C16.5886 10.2015 16.4502 10.2589 16.348 10.361C16.2459 10.4631 16.1885 10.6016 16.1885 10.746V13.2552C16.1885 13.3996 16.2458 13.5382 16.348 13.6403C16.4501 13.7425 16.5886 13.7999 16.733 13.8H19.2422C19.3866 13.7999 19.5251 13.7425 19.6272 13.6404C19.7293 13.5383 19.7867 13.3998 19.7868 13.2554V10.7462C19.7868 10.6747 19.7728 10.6039 19.7454 10.5378C19.7181 10.4717 19.678 10.4117 19.6275 10.3611C19.5769 10.3105 19.5169 10.2704 19.4509 10.243C19.3848 10.2156 19.314 10.2015 19.2425 10.2014V10.2014Z" />
                  <path d="M7.26671 16.189H4.75727C4.61286 16.189 4.47439 16.2464 4.37228 16.3485C4.27016 16.4506 4.21277 16.5891 4.21271 16.7335V19.2425C4.21277 19.3869 4.27016 19.5254 4.37228 19.6275C4.47439 19.7296 4.61286 19.787 4.75727 19.787H7.26647C7.41087 19.787 7.54935 19.7296 7.65146 19.6275C7.75357 19.5254 7.81096 19.3869 7.81103 19.2425V16.7335C7.81106 16.662 7.797 16.5912 7.76966 16.5251C7.74232 16.4591 7.70223 16.399 7.65168 16.3485C7.60114 16.2979 7.54112 16.2578 7.47507 16.2304C7.40901 16.2031 7.33821 16.189 7.26671 16.189V16.189Z" />
                  <path d="M13.2545 16.189H10.7453C10.6009 16.189 10.4624 16.2464 10.3603 16.3485C10.2582 16.4506 10.2008 16.5891 10.2007 16.7335V19.2425C10.2008 19.3869 10.2582 19.5254 10.3603 19.6275C10.4624 19.7296 10.6009 19.787 10.7453 19.787H13.2545C13.3989 19.787 13.5374 19.7296 13.6395 19.6275C13.7416 19.5254 13.799 19.3869 13.799 19.2425V16.7335C13.799 16.5891 13.7417 16.4506 13.6395 16.3485C13.5374 16.2463 13.3989 16.189 13.2545 16.189V16.189Z" />
                  <path d="M19.2425 16.189H16.733C16.5886 16.189 16.4502 16.2464 16.348 16.3485C16.2459 16.4506 16.1885 16.5891 16.1885 16.7335V19.2425C16.1885 19.3869 16.2458 19.5255 16.348 19.6276C16.4501 19.7298 16.5886 19.7872 16.733 19.7873H19.2422C19.3866 19.7872 19.5251 19.7298 19.6272 19.6277C19.7293 19.5256 19.7867 19.3871 19.7868 19.2427V16.7335C19.7868 16.662 19.7728 16.5912 19.7454 16.5251C19.7181 16.4591 19.678 16.399 19.6275 16.3485C19.5769 16.2979 19.5169 16.2578 19.4508 16.2304C19.3848 16.2031 19.314 16.189 19.2425 16.189Z" />
                </svg>
              </div>
              <div className="view-change-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="view-btn-icon"
                >
                  <path d="M19.2437 16.1897L10.7477 16.1894V16.1897L10.7455 16.1894C10.6011 16.1895 10.4627 16.2469 10.3606 16.349C10.2584 16.4511 10.2011 16.5896 10.201 16.734C10.201 16.7441 10.2034 16.7532 10.2039 16.763V19.2432H10.2065C10.2065 19.387 10.2634 19.5249 10.3647 19.6269C10.4661 19.7289 10.6037 19.7866 10.7475 19.7875V19.7878H19.2435V19.7873C19.3872 19.7864 19.5248 19.7286 19.6262 19.6267C19.7275 19.5247 19.7844 19.3867 19.7844 19.243V16.758C19.7849 16.7498 19.7868 16.7419 19.7868 16.7338C19.7868 16.5896 19.7296 16.4514 19.6278 16.3494C19.526 16.2474 19.3878 16.1899 19.2437 16.1897V16.1897Z" />
                  <path d="M7.26671 16.189H4.75727C4.61286 16.189 4.47439 16.2464 4.37228 16.3485C4.27016 16.4506 4.21277 16.5891 4.21271 16.7335V19.2425C4.21271 19.3869 4.27005 19.5253 4.37212 19.6275C4.47419 19.7296 4.61264 19.787 4.75703 19.787H7.26623C7.41063 19.787 7.54911 19.7296 7.65122 19.6275C7.75333 19.5254 7.81072 19.3869 7.81079 19.2425V16.7335C7.81085 16.662 7.79682 16.5912 7.76951 16.5252C7.7422 16.4591 7.70213 16.3991 7.6516 16.3485C7.60107 16.2979 7.54107 16.2578 7.47503 16.2304C7.40899 16.2031 7.3382 16.189 7.26671 16.189V16.189Z" />
                  <path d="M19.2437 10.1921L10.7477 10.1918V10.1921L10.7455 10.1918C10.6011 10.1919 10.4627 10.2493 10.3606 10.3514C10.2584 10.4535 10.2011 10.592 10.201 10.7364C10.201 10.7465 10.2034 10.7556 10.2039 10.7654V13.2456H10.2065C10.2065 13.3894 10.2634 13.5273 10.3647 13.6293C10.4661 13.7313 10.6037 13.789 10.7475 13.7899V13.7902H19.2435V13.7897C19.3872 13.7888 19.5248 13.7311 19.6262 13.6291C19.7275 13.5271 19.7844 13.3891 19.7844 13.2454V10.7604C19.7849 10.7522 19.7868 10.7443 19.7868 10.7362C19.7868 10.592 19.7296 10.4538 19.6278 10.3518C19.526 10.2498 19.3878 10.1923 19.2437 10.1921V10.1921Z" />
                  <path d="M7.26671 10.1914H4.75727C4.61286 10.1914 4.47439 10.2488 4.37228 10.3509C4.27016 10.453 4.21277 10.5915 4.21271 10.7359V13.2449C4.21271 13.3893 4.27005 13.5277 4.37212 13.6299C4.47419 13.732 4.61264 13.7894 4.75703 13.7894H7.26623C7.41063 13.7894 7.54911 13.732 7.65122 13.6299C7.75333 13.5278 7.81072 13.3893 7.81079 13.2449V10.7359C7.81085 10.6644 7.79682 10.5936 7.76951 10.5276C7.7422 10.4615 7.70213 10.4015 7.6516 10.3509C7.60107 10.3003 7.54107 10.2602 7.47503 10.2328C7.40899 10.2054 7.3382 10.1914 7.26671 10.1914V10.1914Z" />
                  <path d="M10.2039 7.26624H10.2065C10.2065 7.41002 10.2634 7.54797 10.3647 7.64995C10.4661 7.75193 10.6037 7.80967 10.7475 7.81056V7.8108H19.2435V7.81032C19.3872 7.80943 19.5248 7.75169 19.6262 7.64971C19.7275 7.54773 19.7844 7.40978 19.7844 7.266V4.78104C19.7849 4.77288 19.7868 4.76496 19.7868 4.7568C19.7868 4.61262 19.7295 4.47436 19.6277 4.37232C19.5258 4.27028 19.3876 4.2128 19.2435 4.21248V4.21224H10.7475V4.21248L10.7453 4.21224C10.6009 4.21231 10.4624 4.2697 10.3603 4.37181C10.2582 4.47392 10.2008 4.6124 10.2007 4.7568C10.2007 4.76688 10.2031 4.776 10.2036 4.78584V7.26624H10.2039Z" />
                  <path d="M7.26671 4.21224H4.75727C4.61286 4.21231 4.47439 4.2697 4.37228 4.37181C4.27016 4.47392 4.21277 4.6124 4.21271 4.7568V7.26576C4.21271 7.41015 4.27005 7.54862 4.37212 7.65074C4.47419 7.75286 4.61264 7.81026 4.75703 7.81032H7.26623C7.41063 7.81026 7.54911 7.75286 7.65122 7.65075C7.75333 7.54864 7.81072 7.41017 7.81079 7.26576V4.7568C7.81088 4.6853 7.79688 4.61449 7.76957 4.54841C7.74227 4.48233 7.70221 4.42228 7.65167 4.3717C7.60114 4.32112 7.54112 4.281 7.47507 4.25364C7.40901 4.22628 7.33821 4.21221 7.26671 4.21224V4.21224Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="filtered-page-sort-wrapper">
            <svg
              className="sort-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8C6 7.73478 6.10536 7.48043 6.29289 7.29289C6.48043 7.10536 6.73478 7 7 7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8C18 8.26522 17.8946 8.51957 17.7071 8.70711C17.5196 8.89464 17.2652 9 17 9H7C6.73478 9 6.48043 8.89464 6.29289 8.70711C6.10536 8.51957 6 8.26522 6 8V8Z"
                fill="#333333"
              />
              <path
                d="M8 12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1054 8.73478 11 9 11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13H9C8.73478 13 8.48043 12.8946 8.29289 12.7071C8.10536 12.5196 8 12.2652 8 12Z"
                fill="#333333"
              />
              <path
                d="M11 15C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H13C13.2652 17 13.5196 16.8946 13.7071 16.7071C13.8946 16.5196 14 16.2652 14 16C14 15.7348 13.8946 15.4804 13.7071 15.2929C13.5196 15.1054 13.2652 15 13 15H11Z"
                fill="#333333"
              />
            </svg>
            <span>Sort By - </span>
            <div className="filtered-page-sort">
              {"Price High to Low"}{" "}
              <svg
                className="dropdown-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
              </svg>
              <div className="sort-dropdown">
                <div className="sort-dropdown__item">Relevance</div>
                <div className="sort-dropdown__item">Price High to Low</div>
                <div className="sort-dropdown__item">Price Low to High</div>
                <div className="sort-dropdown__item">Avg. Customer Review</div>
                <div className="sort-dropdown__item">Publication Date</div>
              </div>
            </div>
          </div>
          <div className="filtered-page-section__content">
            <ThumbnailView
              booksData={trendingBooksData}
              maxDisplay={12}
              maxBooksInRow={3}
              title={"Trending"}
              // seeAllLink={"/frontend-endpoint-that-gives-trneding-books"}
              paginate={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
