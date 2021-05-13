import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilteredPage from "../components/FilteredPage";

export default function Bestsellers() {
  return (
    <>
      <Header />
      <FilteredPage
        title={"Bestsellers"}
        link={""}
        pathHistory={["Home", "Bestsellers"]}
      />
      <Footer />
    </>
  );
}
