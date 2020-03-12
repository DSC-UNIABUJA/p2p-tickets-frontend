import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Wrapper from "../../components/wrapper/Wrapper";
import { Link } from "react-router-dom";
import Form from "../../assets/styles/reusable/Form";

const Header = styled.h1`
	text-align: center;
`;

const Instruction = styled.small`
	text-align: center;
	font-weight: bold;
	display: block;
	margin-bottom: 1.5rem;
	color: #124295;
`;

const RequestSuccessStyle = styled.div`
	margin-top: 3rem;

	p {
		text-align: center;
		font-size: 1.1rem;
		margin-bottom: 2rem;
		margin-left: auto;
		margin-right: auto;
		max-width: 600px;
	}
`;

const Button = styled.div`
	margin-top: 3rem;
	margin-bottom: 3rem;
	text-align: center;
	display: block;
	margin-left: auto;
	margin-right: auto;

	a {
		text-decoration: none;
		font-size: 1.1rem;
		color: white;
		font-weight: 500;
		border-radius: 50px;
		padding: 1rem 3rem;
		background: rgb(248, 97, 80);
		cursor: pointer;
		transition: ease-in-out 0.4s;

		&:hover {
			transform: scale(1.03);
		}
	}
`;

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const onChange = e => {
		setEmail(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// handle submit request here
		console.log(email);
	};

	const submitBtn = useRef();
	return (
		<Wrapper>
			<Helmet>
				<title>Reset Password | Ticketr</title>
			</Helmet>
			<Header>Reset Your Password</Header>
			<Form authForm onSubmit={handleSubmit}>
				<div className="form-group">
					<Instruction>
						Please Enter the email you used to register your account below and a
						reset link will be sent to you.
					</Instruction>
					<input
						type="email"
						name="email"
						id="email"
						required
						placeholder="Your Email address"
						onChange={onChange}
						value={email}
						minLength="3"
					/>
				</div>
				<input
					ref={submitBtn}
					type="submit"
					value="Send reset email"
					className="submit-btn"
					style={{ marginTop: 0 }}
				/>
			</Form>
			{/* if request is successful, show the following */}
			{/* {requestSuccessful()} */}
		</Wrapper>
	);
};

// if request was successful, show the following
const requestSuccessful = () => {
	return (
		<RequestSuccessStyle>
			<Header>Reset Email sent</Header>
			<p>
				Check your email for a link to reset your password. If it doesn’t appear
				within a few minutes, check your spam folder.
			</p>

			<Button>
				<Link to="/login">Back to sign in</Link>
			</Button>
		</RequestSuccessStyle>
	);
};

export default ResetPassword;
