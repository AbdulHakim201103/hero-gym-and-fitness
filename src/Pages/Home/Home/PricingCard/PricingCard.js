import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = ({ price }) => {
  const { type, prices, wifi, health, service } = price;
  return (
    <div className="pricing-div bg-light">
      <div className="pricing-info text-center">
        <h2>{type}</h2>
        <h4>${prices} <small>/mo</small></h4>
        <p>{wifi}</p>
        <p>{health}</p>
        <p>{service}</p>
        <Link className="btn btn-danger my-2"  to="/checkout">Book Now</Link>
      </div>
    </div>
  );
};

export default PricingCard;
