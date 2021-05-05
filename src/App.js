import React from "react";
import "./css/pars.css";
//avatar
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import FilteredPage from "./components/FilteredPage";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import CheckoutPage from "./components/CheckoutPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import { productData } from "./components/productData";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <ProductPage productData={productData[1]} /> */}
      {/* <FilteredPage trending={true} /> */}
      {/* <CartPage /> */}
      {/* <WishlistPage /> */}
      {/* <CheckoutPage /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}
