import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";
import { useAuth } from "./context/AuthProvider";
import { useData } from "./context/DataProvider";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

import "./css/pars.css";
import "./css/style.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import New from "./pages/New";
import Bestsellers from "./pages/Bestsellers";
import Genre from "./pages/Genre";
import Trending from "./pages/Trending";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Book from "./pages/Book";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
//   // withCredentials: true,
// });

export default function App() {
  const {
    state: { tempUserId },
    dispatch: authDispatch,
  } = useAuth();

  const {
    state: { banners, genres },
    dispatch: dataDispatch,
  } = useData();

  const getBanners = async () => {
    try {
      dataDispatch({ type: "SHOW_LOADER" });
      if (banners.length === 0) {
        const {
          data: { success, banners: allBanners },
        } = await axios.get("https://fact-fiction.herokuapp.com/banners");
        // const {
        //   data: { success, banners: allBanners },
        // } = await axiosInstance.get("/banners");
        if (success) {
          dataDispatch({
            type: "STORE_BANNERS",
            payload: allBanners,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getGenres = async () => {
    try {
      if (genres.length === 0) {
        const {
          data: { success, genres: allGenres },
        } = await axios.get("https://fact-fiction.herokuapp.com/genres");
        // const {
        //   data: { success, genres: allGenres },
        // } = await axiosInstance.get("/genres");
        if (success) {
          dataDispatch({
            type: "STORE_GENRES",
            payload: allGenres,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUserDetails = async () => {
    try {
      const {
        data: { success, user: currentUser },
      } = await axios.get(
        `https://fact-fiction.herokuapp.com/users/${tempUserId}`
      );
      if (success) {
        authDispatch({
          type: "STORE_USER_DETAILS",
          payload: currentUser,
        });
        dataDispatch({
          type: "SETUP_CART",
          payload: currentUser.cart,
        });
        dataDispatch({
          type: "SETUP_WISHLIST",
          payload: currentUser.wishlist,
        });
        dataDispatch({ type: "HIDE_LOADER" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (banners.length === 0) {
      console.log("test");
      getBanners();
      getGenres();
      getUserDetails();
    }
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/search" element={<Search />} />

          <Route path="/new" element={<New />} />

          <Route path="/bestsellers" element={<Bestsellers />} />

          <Route path="/category" element={<Genre />} />
          {/* <Route path="/genre" element={<Genre />} /> */}
          {/* <Route path="/genre/:id" element={<Genre />} /> */}

          <Route path="/trending" element={<Trending />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/book/:bookId" element={<Book />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}
