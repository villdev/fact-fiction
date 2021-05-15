import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "STORE_BANNERS":
      return { ...state, banners: [...action.payload] };
    case "STORE_GENRES":
      return { ...state, genres: [...action.payload] };
    case "SETUP_CART":
      return {
        ...state,
        cart: {
          id: action.payload._id,
          total: action.payload.checkout.total.toFixed(2),
          subtotal: action.payload.checkout.subtotal.toFixed(2),
          deliveryCharges: action.payload.checkout.deliveryCharges,
          discount: action.payload.checkout.discountTotal.toFixed(2),
          totalQuantity: action.payload.items.length,
          items: [...action.payload.items],
        },
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...action.payload.items],
          total: action.payload.total,
          subtotal: action.payload.subtotal,
          discount: action.payload.discount,
          // total: state.cart.total + action.payload.total,
          // subtotal: state.cart.subtotal + action.payload.subtotal,
          // discount: state.cart.discount + action.payload.discount,
        },
      };

    case "SETUP_WISHLIST":
      return {
        ...state,
        wishlist: {
          id: action.payload._id,
          quantity: action.payload.items.length,
          items: [...action.payload.items],
        },
      };
    case "UPDATE_WISHLIST":
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          items: [...action.payload],
        },
      };
    // case "TOGGLE_LOADER":
    case "SHOW_LOADER":
      return {
        ...state,
        // loading: !state.loading,
        loading: true,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        // loading: !state.loading,
        loading: false,
      };
    case "UPDATE_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  cart: {
    id: "",
    total: 0.0,
    subtotal: 0,
    discount: 0,
    deliveryCharges: 40,
    // totalQuantity: 0,
    items: [],
  },
  wishlist: {
    id: "",
    // quantity: 0,
    items: [],
  },
  resultsPerPage: 12,
  sortBy: "Relevance",
  banners: [],
  genres: [],
  bestsellers: [],
  trending: [],
  //   filters: [],
  loading: false,
  searchQuery: "",
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
