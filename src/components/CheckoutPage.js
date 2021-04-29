import React, { useState } from "react";
import { addressData, paymentData } from "./userData";
import AddressInput from "./AddressInput";
import PaymentInput from "./PaymentInput";

export default function CheckoutPage() {
  const [activeAddress, setActiveAddress] = useState("");
  const [activePayment, setActivePayment] = useState("");
  const selectActiveAddress = (e) => {
    if (e.target.type === "radio") {
      setActiveAddress(e.target);
    }
  };
  const selectActivePayment = (e) => {
    if (e.target.type === "radio") {
      setActivePayment(e.target);
    }
  };
  return (
    <div className="checkout-page-wrapper container-75">
      <button className="btn-back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
            fill="#333333"
          />
        </svg>
        Continue Shopping
      </button>
      <div className="checkout-page-column-wrapper">
        <div className="checkout-page-column">
          <div className="checkout-page-section">
            <div className="checkout-page__header">Shipping Address</div>
            <div className="checkout-page__content">
              <div
                className="shipping-address-wrapper"
                // onChange={(e) => setActiveAddress(e.target)}
                onChange={selectActiveAddress}
              >
                {addressData.map((address) => (
                  <AddressInput
                    key={address.id}
                    addressData={address}
                    type={"addressSelect"}
                    edit={"closed"}
                    activeRadio={activeAddress}
                    setActiveRadio={setActiveAddress}
                  />
                ))}
                {
                  <AddressInput
                    addressData={{}}
                    type={"addressSelect"}
                    edit={"open"}
                    activeRadio={activeAddress}
                    setActiveRadio={setActiveAddress}
                  />
                }
              </div>
            </div>
          </div>
          <div className="checkout-page-section">
            <div className="checkout-page__header">Payment Method</div>
            <div className="checkout-page__content">
              <div
                className="payment-method-wrapper"
                onChange={selectActivePayment}
              >
                {paymentData.map((payment) => (
                  <PaymentInput
                    key={payment.id}
                    paymentData={payment}
                    type={"paymentSelect"}
                    edit={"closed"}
                    activeRadio={activePayment}
                    setActiveRadio={setActivePayment}
                  />
                ))}
                {
                  <PaymentInput
                    paymentData={{}}
                    type={"paymentSelect"}
                    edit={"open"}
                    activeRadio={activePayment}
                    setActiveRadio={setActivePayment}
                  />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page-column">
          <div className="checkout-place-order-section">
            <div className="place-order-wrapper">
              <button className="btn btn--dark btn--sm btn-place-order">
                Place Order
              </button>
              <div>
                By placing your order, you agree to our company&#39;s{" "}
                <span>Privacy Policy</span> and <span>Conditions of Use</span>.
              </div>
            </div>
            <div className="order-summary">
              <div className="order-summary__header">Order Summary</div>
              <div className="order-summary__content">
                <div className="order-summary__row">
                  <span>Items(2):</span>
                  <span>₹1000.00</span>
                </div>
                <div className="order-summary__row">
                  <span>Delivery:</span>
                  <span>₹40.00</span>
                </div>
                <div className="order-summary__row">
                  <span>Discount:</span>
                  <span>-₹1000.00</span>
                </div>
              </div>
            </div>
            <div className="order-total">
              <span className="order-total__header">Order Total:</span>
              <span>₹1000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
