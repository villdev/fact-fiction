import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "STORE_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

const initialState = {
  tempUserId: "609861459c1fca04f0a57856",
  userDetails: {},
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
