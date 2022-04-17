import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className=" container my-5 ">
      <div className="form-container w-75 m-auto">
        <h2 className="text-center my-4 text">Checkout</h2>
        <form className="w-50 m-auto">
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="email"
            placeholder="Email"
            required
          />
          <div className="d-flex">
            <input
              className="d-block me-1 w-100 mb-3 rounded border-1 p-2"
              type="tel"
              placeholder="Mobile"
              required
            />
            <input className="d-block ms-1 w-100 mb-3 rounded border-1 p-2" type="date" required />
          </div>
           <select className="d-block w-100 mb-3 rounded border-1 p-2" name="service">
               <option value="">Basic</option>
               <option value="">Advance</option>
               <option value="">Premium</option>
           </select>
           <textarea className="d-block w-100 mb-3 rounded border-1 p-2" name="textarea" placeholder="Massage" id="" cols="30" rows="5"></textarea>

          <input className="d-block btn btn-primary w-100" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
