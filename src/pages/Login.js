import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import showPwIcon from "../images/view-show.svg";
import hidePwIcon from "../images/view-hide.svg";

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     }, wait);
//     if (immediate && !timeout) func.apply(context, args);
//   };
// }

export default function Login() {
  //   const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [errors, setErrors] = useState({
    pwError: false,
    confirmPwError: false,
  });

  //   const delayedCheckPassword = useCallback(
  //     debounce((pw) => {
  //       if (!/\d/.test(pw) || pw.length < 8) {
  //         setErrors((e) => {
  //           return { ...e, pwError: true };
  //         });
  //       } else if (pw.length >= 8 && /\d/.test(pw)) {
  //         setErrors((e) => {
  //           return { ...e, pwError: false };
  //         });
  //       }
  //       // else if (pw === "") {
  //       //   setErrors((e) => {
  //       //     return { ...e, pwError: false };
  //       //   });
  //       // }
  //     }, 500),
  //     []
  //   );
  //   const delayedConfirmPassword = useCallback(
  //     debounce((confirmPw, pw) => {
  //       if (pw !== "") {
  //         if (confirmPw === pw) {
  //           setErrors((e) => {
  //             return { ...e, confirmPwError: false };
  //           });
  //         } else {
  //           setErrors((e) => {
  //             return { ...e, confirmPwError: true };
  //           });
  //         }
  //       }
  //     }, 500),
  //     []
  //   );
  //   const updateFullname = (e) => {
  //     setFullname(e.target.value);
  //   };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    // delayedCheckPassword(e.target.value);
  };
  //   const checkConfirmPassword = (e) => {
  //     setConfirmPassword(e.target.value);
  //     delayedConfirmPassword(e.target.value, password);
  //   };
  const toggleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <div className="login-page-wrapper">
      <div className="login-page__col pattern">
        {/* <div className="exercise"> */}
        <div className="user-form-wrapper">
          <div className="user-form-header">
            <div className="user-form-header__title">
              Login to Your Account!
            </div>
            <div className="user-form-header__desc">
              Login to access all the features.
            </div>
          </div>

          <form className="user-form">
            <div className="user-email-wrapper user-form-row">
              <label htmlFor="user-email">Email</label>
              <div className="user-email-input-wrapper">
                <input
                  className="user-email-input"
                  // type="password"
                  type="email"
                  name="user-email"
                  id="user-email"
                  onChange={updateEmail}
                  value={email}
                />
              </div>
              <div
                className="user-form-row__details"
                // style={errors.confirmPwError ? { color: "red" } : {}}
              >
                Enter a valid email.
              </div>
            </div>

            <div className="new-password-wrapper user-form-row">
              <label htmlFor="new-password">Password</label>
              <div className="new-password-input-wrapper">
                <input
                  className="new-password-input"
                  type={viewPassword ? "text" : "password"}
                  // type="text"
                  name="new-password"
                  id="new-password"
                  onChange={updatePassword}
                  value={password}
                  // onKeyDown={updatePassword}
                />
                {viewPassword ? (
                  <img onClick={toggleViewPassword} src={showPwIcon} alt="" />
                ) : (
                  <img onClick={toggleViewPassword} src={hidePwIcon} alt="" />
                )}
              </div>
              <div
                className="user-form-row__details"
                // * change color from red to hex/rgba (in confirm pw as well)--------------------------------
                style={errors.pwError ? { color: "red" } : {}}
              >
                Enter the password.
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--dark btn-user-form"
              disabled={
                //   ! change first condition-----------------------------
                !(errors.pwError !== true && errors.confirmPwError !== true) ||
                password === "" ||
                email === ""
              }
            >
              {/* Register */}
              Login
            </button>
            <div className="alt-form-link">
              Don&#39;t have an account?{" "}
              <Link to="/signup" className="nav-link">
                <button className="btn btn--sm btn--rounded btn--link btn-alt-form">
                  {" "}
                  Signup
                </button>
              </Link>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
      <div className="login-page__col ff-pattern"></div>
    </div>
  );
}
