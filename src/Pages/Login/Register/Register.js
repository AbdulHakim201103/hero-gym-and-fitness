import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import Social from "../Social/Social";
import { Spinner } from "react-bootstrap";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const termsRef = useRef("");
  const navigate = useNavigate();
  let errorElement;
  let loadingElement;
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }
  if (loading || updating) {
    loadingElement = (
      <p className="text-center">
        <Spinner animation="grow" variant="info" />
      </p>
    );
  }

  if (user) {
    navigate("/home");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");
  };

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
          {errorElement}
          {loadingElement}
          <div className="my-3">
            <input
              onClick={() => setAgree(!agree)}
              ref={termsRef}
              className="me-3"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label className={agree ? "text-primary" : "text-danger"} htmlFor="terms">
              Accept Terms and conditions
            </label>
          </div>
          <input
            disabled={!agree}
            className="d-block btn btn-primary w-100"
            type="submit"
            value="Register"
          />
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
