import React from "react";
import "./style.css";
import Button from "../Button";
const Pricing = () => {
  return (
    <div className="pricing-wrapper">
      <div className="price-container">
        <div className="Price">
          <h1>$299</h1>
          <h4>per month</h4>
        </div>
        <div className="unlimited">
          <h4>Unlimited</h4>
          <h4>Lost of Cliens & Users</h4>
          <hr />

          <h3> 2500 SKU's</h3>
          <h3> 5GB Storage</h3>
          <h3>1.5% Transition fee</h3>
        </div>
        <div className="buy-now-btn">
          <Button className={"btn-buyNow"} title={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
