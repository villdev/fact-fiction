import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilteredPage from "../components/FilteredPage";

export default function Trending() {
  return (
    <>
      <Header />
      <FilteredPage
        title={"Trending"}
        link={""}
        pathHistory={["Home", "Trending"]}
      />
      <Footer />
    </>
  );
}
