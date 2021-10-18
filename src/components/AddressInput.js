import React, { useState, useRef } from "react";

export default function AddressInput({
  addressData,
  type,
  edit,
  activeRadio,
  setActiveRadio,
}) {
  // !refactor code--------------------------------------------------------------------------
  // !refactor code--------------------------------------------------------------------------
  const addressRadioEl = useRef(null);
  const [editMode, setEditMode] = useState(edit);
  const openEditMode = () => {
    setEditMode("open");
    setActiveRadio(addressRadioEl.current);
  };
  const closeEditMode = () => {
    setEditMode("closed");
    if (addressRadioEl.current !== activeRadio) {
      setActiveRadio(addressRadioEl.current);
    }
  };
  if (
    editMode === "open" &&
    addressRadioEl.current !== activeRadio &&
    addressData.firstName
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
              addressRadioEl.current === activeRadio
                ? "var(--black-color)"
                : "var(--bg)",
          }}
        >
          <label className="input-radio radio--light address-input__radio-wrapper">
            <input
              name="addressInput"
              type="radio"
              className="address-input__radio"
              ref={addressRadioEl}
              checked={addressRadioEl.current === activeRadio}
            />
            <span className="address-input__header">
              <span>{`${addressData.firstName} ${addressData.lastName}`}</span>
              {`${addressData.streetAddress}, ${addressData.state}, ${addressData.zip}`}
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
              addressRadioEl.current === activeRadio
                ? "var(--black-color)"
                : "var(--bg)",
          }}
        >
          <div className="address-input--open__header">
            <label className="input-radio radio--light address-input__radio-wrapper">
              <input
                name="addressInput"
                type="radio"
                className="address-input__radio"
                ref={addressRadioEl}
                checked={addressRadioEl.current === activeRadio}
              />
              <span>
                {addressData.firstName ? "Edit Address" : "Use New Address"}
              </span>
            </label>
          </div>
          <div className="address-input__row">
            <div className="address-input__first-name">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                defaultValue={addressData.firstName || ""}
              />
            </div>
            <div className="address-input__last-name">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                defaultValue={addressData.lastName || ""}
              />
            </div>
          </div>
          <div className="address-input__row">
            <div className="address-input__street-address">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                name="streetAddress"
                type="text"
                defaultValue={addressData.streetAddress || ""}
              />
            </div>
          </div>
          <div className="address-input__row">
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
          </div>
          {addressData.firstName && (
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
