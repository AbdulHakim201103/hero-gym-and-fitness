import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../images/google.png";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import "./Register.css";
import Social from "../Social/Social";

const Register = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')
  const navigate =useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);



  if (user) {
    navigate('/home');
  }


  const handleSubmit =event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password)
  }

  return (
    <div className=" container my-5 ">
      <div className="form-container w-75 m-auto">
        <h2 className="text-center my-4 text">Please Register</h2>
        <form onSubmit={handleSubmit} className="w-50 m-auto">
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="text"
            ref={nameRef}
            placeholder="Name"
            required
          />
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <input
            className="d-block w-100  mb-3 rounded border-1 p-2"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <input className="d-block btn btn-primary w-100" type="submit" value="Register" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
          Already have an account?
            <Link className="link-btn" to="/login">
            Please Login
            </Link>
          </p>
        </div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Register;
