import React from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <div className="service-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="d-flex justify-content-center align-content-center">
          <Link className="btn btn-danger my-2" to="/checkout">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
