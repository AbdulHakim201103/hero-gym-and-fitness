import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from '../../../images/banner/banner1.webp'
import banner2 from '../../../images/banner/banner2.webp'
import banner3 from '../../../images/banner/banner3.webp'
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Healthy Body-Healthy Life !!!</h1>
            <Link className="btn btn-danger my-5"  to="/checkout">Contact Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Reach Your Potential !!!</h1>
            <Link className="btn btn-danger my-5"  to="/checkout">Contact Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Healthy & Fit With Coach !!!</h1>
            <Link className="btn btn-danger my-5"  to="/checkout">Contact Me</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
