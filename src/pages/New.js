import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilteredPage from "../components/FilteredPage";

export default function New() {
  return (
    <>
      <Header />
      <FilteredPage
        title={"New Releases"}
        link={""}
        pathHistory={["Home", "New Releases"]}
      />
      <Footer />
    </>
  );
}
