import React, { useEffect, useState } from "react";
import PricingCard from "../Home/PricingCard/PricingCard";
import './Pricing.css'

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("pricing.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div className="pricing-page-container bg-light container my-5">
      <div className="text-center">
        <h1 className="my-5">Pricing Plan</h1>
        <p className="my-5"> 
          World is committed to making part participation in the event a harassment free experience
          for everyone regardless of level of experience.
        </p>
        <div className="pricing-container">
          {pricing.map((price) => (
            <PricingCard key={price.id} price={price}></PricingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
