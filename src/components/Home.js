import React from "react";
import Banner from "./Banner";
import { bannerData } from "./BannerData";

export default function Home() {
  return (
    <div className="home-page-wrapper container-75">
      <Banner content={bannerData} />
    </div>
  );
}
