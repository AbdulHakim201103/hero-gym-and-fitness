import React from "react";
import "./Login.css";
import google from "../../../images/google.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =useNavigate()

  const navigateRegister = () =>{
    navigate('/register')
  }
  return (
    <div className=" container my-5 ">
      <div className="form-container w-75 m-auto">
        <h2 className="text-center my-4 text">Please Login</h2>
        <form className="w-50 m-auto">
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
          <input className="d-block btn btn-primary w-100" type="submit" value="Login" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            New to Hero Gym?
            <Link className="link-btn" onClick={navigateRegister} to="/register">
              Create an Account
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

export default Login;
