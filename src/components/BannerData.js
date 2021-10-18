import React from "react";
import bannerImg1 from "../images/banners/tempBanner.jpg";
import bannerImg2 from "../images/banners/tempBanner.jpg";
import bannerImg3 from "../images/banners/tempBanner.jpg";
import bannerImg4 from "../images/banners/tempBanner.jpg";

export const bannerData = [
  {
    id: 1,
    title: "World Book Day Sale",
    subHeading: "UP TO 30% OFF",
    // image: "../images/banners/tempBanner.jpg",
    image: <img src={bannerImg1} alt="" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero vel cumque rem. Nisi amet accusantium alias quia officiis omnis culpa maiores veritatis quaerat eos. Deserunt saepe impedit velit soluta?",
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Banner Title2",
    subHeading: "Subheading for banner",
    // image: "../images/banners/tempBanner.jpg",
    image: <img src={bannerImg2} alt="" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero vel cumque rem. Nisi amet accusantium alias quia officiis omnis culpa maiores veritatis quaerat eos. Deserunt saepe impedit velit soluta?",
    button: "Shop Now",
  },
  {
    id: 3,
    title: "Banner Title3",
    subHeading: "Subheading for banner",
    // image: "../images/banners/tempBanner.jpg",
    image: <img src={bannerImg3} alt="" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero vel cumque rem. Nisi amet accusantium alias quia officiis omnis culpa maiores veritatis quaerat eos. Deserunt saepe impedit velit soluta?",
    button: "Shop Now",
  },
  {
    id: 4,
    title: "Banner Title4",
    subHeading: "Subheading for banner",
    // image: "../images/banners/tempBanner.jpg",
    image: <img src={bannerImg4} alt="" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero vel cumque rem. Nisi amet accusantium alias quia officiis omnis culpa maiores veritatis quaerat eos. Deserunt saepe impedit velit soluta?",
    button: "Shop Now",
  },
];
