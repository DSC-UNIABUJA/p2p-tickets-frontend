import React, { useState, useEffect, createRef } from "react";
import Wrapper from "../misc/Wrapper";
import { Link } from "react-router-dom";
import LoginComponent from "../../StyledComponents/auth/Login";
import FormComponent from "../../StyledComponents/misc/Form";
import { connect } from "react-redux"
import {setAlert} from "../../actions/alertAction"

const Register = (props) => {
  // refs
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmPasswordRef = createRef();
  const passwordMainRef = createRef();
  const submitBtn = createRef();

  // props
  const {setAlert} = props

  // set loading to "loading..." when making async requests
  // useEffect(() => {
  //   if (registerLoginLoading === true) {
  //     submitBtn.current.value = "Loading...";
  //     submitBtn.current.style.opacity = "0.5";
  //   } else {
  //     submitBtn.current.value = "Register";
  //     submitBtn.current.style.opacity = "1";
  //   }
  // }, [registerLoginLoading]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { name, email, password, confirmPassword } = user;
  const onChange = e => {
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value
    };
    setUser(updatedUser);
    handleErrorMessage(e);
  };

  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleSubmit = e => {
    // setRegisterLoginLoading();
    e.preventDefault();
      // register({
      //   name,
      //   email,
      //   password,
      //   confirmPassword
      // });
    console.log( {
      name, email, password, confirmPassword
    } )
    setAlert("Successfully registered. Redirecting to login...", "success");
    // after successful registering, clear credentials and redirect to login 
    
  };

   const emailRegex = /^([a-z0-9\.\-_]+)@([a-z0-9\.\-_]+)\.([a-z]{2,6})$/i;
   const whiteSpaceRegex = /\S/;
   useEffect(() => {
     if (
       whiteSpaceRegex.test(name) &&
       name.length >= 5 &&
       emailRegex.test(email) &&
       password === confirmPassword &&
       password.length >= 5
     ) {
       setDisableSubmit(false);
     } else {
       setDisableSubmit(true);
     }
   }, [disableSubmit, user ] );
  
    const disabledBtn = () => {
      if (disableSubmit)
        return {
          color: "rgba(0, 0, 0, 0.26)",
          boxShadow: "none",
          backgroundColor: "rgba(0, 0, 0, 0.12)",
          cursor: "default",
          pointerEvents: "none"
        };
    };

    const errorMessageStyle = {
      color: "red",
      display: "none"
    };

    const handleErrorMessage = e => {
      switch (e.target.name) {
        case "name":
          if (
            !whiteSpaceRegex.test(e.target.value) ||
            e.target.value.length < 5
          ) {
            nameRef.current.style.display = "block";
          } else {
            nameRef.current.style.display = "none";
          }
          break;
        case "email":
          if (!emailRegex.test(e.target.value)) {
            emailRef.current.style.display = "block";
          } else {
            emailRef.current.style.display = "none";
          }
          break;
        case "password":
          if (e.target.value.length < 5) {
            passwordRef.current.style.display = "block";
          } else {
            passwordRef.current.style.display = "none";
          }
          break;
        case "confirmPassword":
          if (passwordMainRef.current.value !== e.target.value) {
            confirmPasswordRef.current.style.display = "block";
          } else {
            confirmPasswordRef.current.style.display = "none";
          }
          break;
        default:
          break;
      }
    };
   
  return (
    <Wrapper public auth>
      <LoginComponent>
        <h1 className="mainHeader">Create an account</h1>
        {/* alert messages here */}
        <p className="helper-form-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <FormComponent authForm onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              minLength="5"
              value={name}
              onChange={onChange}
            />
            <small ref={nameRef} style={errorMessageStyle}>
              Name must be at least 5 characters long
            </small>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
            <small ref={emailRef} style={errorMessageStyle}>
              Email should be a valid one
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Choose a strong password"
              value={password}
              onChange={onChange}
              minLength="5"
              ref={passwordMainRef}
            />
            <small ref={passwordRef} style={errorMessageStyle}>
              Password must be at least 5 characters long
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={onChange}
              minLength="5"
            />
            <small ref={confirmPasswordRef} style={errorMessageStyle}>
              Passwords don't match
            </small>
          </div>
          <input
            style={disabledBtn()}
            type="submit"
            value="Register"
            ref={submitBtn}
            className="submit-btn"
          />
        </FormComponent>
      </LoginComponent>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  setAlert
}

export default connect(null, mapDispatchToProps)(Register);
