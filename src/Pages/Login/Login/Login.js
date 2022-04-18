import React, { useRef } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import { Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  let loadingElement;

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }
  if (loading || sending) {
    loadingElement = (
      <p className="text-center">
        <Spinner animation="grow" variant="info" />
      </p>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
    else{
      toast('Please enter your email address')
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className=" container my-5 ">
      <div className="form-container w-75 m-auto">
        <h2 className="text-center my-4 text">Please Login</h2>
        <form onSubmit={handleSubmit} className="w-50 m-auto">
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
          {errorElement}
          {loadingElement}
          <input className="d-block btn btn-primary w-100" type="submit" value="Login" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            New to Hero Gym?
            <Link className="link-btn" to="/register">
              Create an Account
            </Link>
          </p>
        </div>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            Forget Password?
            <button className="btn text-decoration-none btn-link" onClick={resetPassword}>
              Reset Password
            </button>
          </p>
        </div>
        <Social></Social>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
