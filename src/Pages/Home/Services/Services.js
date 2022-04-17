import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="services-page-container container">
      <div className="row ">
        <h1 className="text-center my-5">Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
