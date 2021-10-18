import React, { useState, useRef } from "react";

export default function PaymentInput({
  paymentData,
  type,
  edit,
  activeRadio,
  setActiveRadio,
}) {
  // !refactor code--------------------------------------------------------------------------
  // !refactor code--------------------------------------------------------------------------
  const paymentRadioEl = useRef(null);
  const [editMode, setEditMode] = useState(edit);
  const openEditMode = () => {
    setEditMode("open");
    setActiveRadio(paymentRadioEl.current);
  };
  const closeEditMode = () => {
    setEditMode("closed");
    if (paymentRadioEl.current !== activeRadio) {
      setActiveRadio(paymentRadioEl.current);
    }
  };
  if (
    editMode === "open" &&
    paymentRadioEl.current !== activeRadio &&
    paymentData.id
  ) {
    setEditMode("closed");
  }
  return (
    <div className="address-input-wrapper">
      {editMode === "closed" && (
        <div
          className="address-input--closed"
          style={{
            borderColor:
              paymentRadioEl.current === activeRadio
                ? "var(--black-color)"
                : "var(--bg)",
          }}
        >
          <label className="input-radio radio--light address-input__radio-wrapper">
            <input
              name="paymentInput"
              type="radio"
              className="address-input__radio"
              ref={paymentRadioEl}
              checked={paymentRadioEl.current === activeRadio}
            />
            <span className="address-input__header">
              <span>{`${paymentData.type}`}</span>
              {`${paymentData.cardNumber}`}
            </span>
            <div className="address-input-border"></div>
          </label>
          <div className="address-input__actions-wrapper">
            <button
              onClick={openEditMode}
              className="btn btn--sm btn--rounded btn--link"
            >
              Edit
            </button>
            <button className="btn btn--sm btn--rounded btn--link">
              Remove
            </button>
          </div>
        </div>
      )}
      {editMode === "open" && (
        <div
          className="address-input--open"
          style={{
            borderColor:
              paymentRadioEl.current === activeRadio
                ? "var(--black-color)"
                : "var(--bg)",
          }}
        >
          <div className="address-input--open__header">
            <label className="input-radio radio--light address-input__radio-wrapper">
              <input
                name="paymentInput"
                type="radio"
                className="address-input__radio"
                ref={paymentRadioEl}
                checked={paymentRadioEl.current === activeRadio}
              />
              <span>
                {paymentData.id ? "Edit Card" : "Credit or Debit Card"}
              </span>
            </label>
          </div>
          <div className="address-input__row">
            <div className="address-input__first-name">
              <label htmlFor="firstName">Card Holder&#39;s Name</label>
              <input
                name="firstName"
                type="text"
                defaultValue={paymentData.name || ""}
              />
            </div>
          </div>
          <div className="address-input__row">
            <div className="payment-input__card-number">
              <label htmlFor="firstName">Card Number</label>
              <input
                name="firstName"
                type="text"
                defaultValue={paymentData.cardNumber || ""}
              />
            </div>
            <div className="address-input__street-address">
              <label htmlFor="streetAddress">Expiry Date</label>
              <input
                name="streetAddress"
                type="text"
                defaultValue={paymentData.expiryDate || ""}
              />
            </div>
            <div className="address-input__last-name">
              <label htmlFor="lastName">CVV</label>
              <input
                name="lastName"
                type="text"
                defaultValue={paymentData.cvv || ""}
              />
            </div>
          </div>
          {/* <div className="address-input__row">
            <div className="address-input__apt-number">
              <label htmlFor="aptNumber">Apt Number</label>
              <input
                name="aptNumber"
                type="text"
                defaultValue={addressData.aptNumber || ""}
              />
            </div>
            <div className="address-input__state">
              <label htmlFor="state">State</label>
              <input
                name="state"
                type="text"
                defaultValue={addressData.state || ""}
              />
            </div>
            <div className="address-input__zip">
              <label htmlFor="zip">Zip</label>
              <input
                name="zip"
                type="text"
                defaultValue={addressData.zip || ""}
              />
            </div>
          </div> */}
          {paymentData.id && (
            <div className="address-input__row">
              <button
                onClick={closeEditMode}
                className="btn btn--black btn--outlined btn--sm btn-cancel"
              >
                Cancel
              </button>
              <button
                onClick={closeEditMode}
                className="btn btn--dark btn--sm btn-use-this"
              >
                {/* {addressData.firstName ? "Save" : "Use This Address"} */}
                Save
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
