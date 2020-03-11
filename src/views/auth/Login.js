import React, { useState, useEffect, createRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";
import Form from "../../assets/styles/reusable/Form";
// import axios from "axios";

import styled from "styled-components";

const LoginStyle = styled.div`
	.mainHeader {
		text-align: center;
		margin-top: 3rem;
	}

	.helper-form-text {
		color: #888;
		text-align: center;
		margin: 0 auto;

		a {
			text-decoration: none;
			color: #b183fa;
		}
	}
`;

const Login = () => {
	// refs
	const submitBtn = createRef();
	// display loading when making asynchronous request
	// useEffect(() => {
	//   if (registerLoginLoading === true) {
	//     submitBtn.current.value = "Loading...";
	//     submitBtn.current.style.opacity = "0.5";
	//   } else {
	//     submitBtn.current.value = "Login";
	//     submitBtn.current.style.opacity = "1";
	//   }
	// }, [registerLoginLoading]);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const { email, password } = user;
	const onChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		// setRegisterLoginLoading();
		e.preventDefault();
		// login({
		//   email: usernameOrEmail,
		//   password: password
		// });
		// const token = "";
		// axios.defaults.headers.Authorization = `Bearer ${token}`;
		// axios.defaults.withCredentials = true;
		console.log(user);
		// after loggin in, clear credentials and redirect to dashboard
	};
	const [disableSubmit, setDisableSubmit] = useState(true);

	useEffect(() => {
		if (
			/\S/.test(user.email) &&
			user.email.length >= 3 &&
			user.password.length >= 5
		) {
			setDisableSubmit(false);
		} else {
			setDisableSubmit(true);
		}
	}, [disableSubmit, user]);

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
	return (
		<LoginStyle>
			<Helmet>
				<title>Login | Ticketr</title>
			</Helmet>
			<Wrapper>
				<h1 className="mainHeader">Welcome back</h1>
				<p className="helper-form-text">
					Don't have an account yet? <Link to="/register">Sign Up</Link>
				</p>
				<Form authForm onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="email"
							name="email"
							id="email"
							required
							placeholder="You Email address"
							onChange={onChange}
							value={email}
							minLength="3"
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							id="password"
							required
							placeholder="Enter your password"
							onChange={onChange}
							value={password}
							minLength="5"
						/>
					</div>
					<input
						ref={submitBtn}
						style={disabledBtn()}
						type="submit"
						value="Login"
						className="submit-btn"
					/>
				</Form>
			</Wrapper>
		</LoginStyle>
	);
};

export default Login;
