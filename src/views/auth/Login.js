import React, {useState, createRef} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Form from "../../assets/styles/reusable/Form";

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
			color: #b183fa !important;
		}
	}
`;

const Login = () => {
	const submitBtn = createRef();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const {email, password} = user;
	const onChange = e => {
		setUser({...user, [e.target.name]: e.target.value});
	};
	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
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
							placeholder="Your Email address"
							onChange={onChange}
							value={email}
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
						/>
					</div>
					<p className="helper-form-text">
						<Link to="/reset-password">Forgot password?</Link>
					</p>
					<input ref={submitBtn} type="submit" value="Login" className="submit-btn" />
				</Form>
			</Wrapper>
		</LoginStyle>
	);
};

export default Login;
