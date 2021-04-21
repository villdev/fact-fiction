import React from "react";
import "./css/pars.css";
//avatar
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import FilteredPage from "./components/FilteredPage";
import Footer from "./components/Footer";
import { productData } from "./components/productData";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <ProductPage productData={productData[1]} /> */}
      <FilteredPage trending={true} />
      <Footer />
    </div>
  );
}
