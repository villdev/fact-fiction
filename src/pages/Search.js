import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilteredPage from "../components/FilteredPage";

export default function Search() {
  return (
    <>
      <Header />
      <FilteredPage
        title={"Search"}
        link={""}
        pathHistory={["Home", "Search"]}
      />
      <Footer />
    </>
  );
}
