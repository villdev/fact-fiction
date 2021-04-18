import React from "react";
import "./css/pars.css";
//avatar
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
