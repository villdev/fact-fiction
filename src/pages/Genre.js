import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilteredPage from "../components/FilteredPage";

export default function Genre() {
  return (
    <>
      <Header />
      <FilteredPage
        title={"Category"}
        link={""}
        pathHistory={["Home", "Genre"]}
      />
      <Footer />
    </>
  );
}
