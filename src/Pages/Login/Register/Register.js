import React from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../images/google.png";
import "./Register.css";

const Register = () => {
  const navigate =useNavigate()
 

  const navigateLogin = () =>{
    navigate('/login')
  }

  const handleRegister = event =>{
    event.preventDefault();
   console.log(event.target.email.value);

    // createUserWithEmailAndPassword(email, password);

  }

  return (
    <div className=" container my-5 ">
      <div className="form-container w-75 m-auto">
        <h2 className="text-center my-4 text">Please Register</h2>
        <form onSubmit={handleRegister} className="w-50 m-auto">
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
          <input
            className="d-block w-100  mb-3 rounded border-1 p-2"
            type="password"
            placeholder="Password"
            required
          />
          <input className="d-block btn btn-primary w-100" type="submit" value="Register" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
          Already have an account?
            <Link className="link-btn" onClick={navigateLogin} to="/login">
            Please Login
            </Link>
          </p>
        </div>
        <div className="d-flex w-50 my-3 m-auto justify-content-center align-items-center">
          <div className="left me-3"></div>
          <p className="text-success">Or</p>
          <div className="right ms-3"></div>
        </div>
        <div className="w-50 m-auto">
          <button className="btn border border-danger mb-5 w-100">
            <img className="me-3" src={google} width="30px" alt="" /> Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
