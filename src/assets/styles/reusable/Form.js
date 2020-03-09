import styled, { css } from "styled-components";

const FormComponent = styled.form`
	max-width: 500px;
	margin: 2rem auto;
	overflow: hidden;
	padding: 0 2rem;

	@media (max-width: 500px) {
		padding: 0 1rem;
	}

	input {
		margin: 1.2rem 0;
	}

	.form-text {
		display: block;
		margin-top: 0.3rem;
		color: #888;
	}

	input[type="text"],
	input[type="email"],
	input[type="password"],
	input[type="date"],
	select,
	textarea {
		display: block;
		width: 92%;
		padding: 0.4rem;
		font-size: 1.2rem;
		border: 1px solid #ccc;
		margin-left: auto;
		margin-right: auto;
		/* The above is subject to change */

		${props =>
			props.authForm &&
			css`
				border-top: none;
				border-left: none;
				border-right: none;
				border-bottom: 1px solid #d6d9de;
				font-weight: 300;
				outline: none;
				color: #555;

				&:focus {
					border-bottom: 2px solid #3639a4;

					&:invalid {
						border-bottom-color: red;
					}

					&:valid {
						border-bottom-color: green;
					}
				}
			`}
	}

	input[type="submit"],
	button {
		font: inherit;
	}

	.form-group {
		margin: 1.2rem 0;
		${props =>
			props.authForm &&
			css`
				&:first-child {
					input {
						margin-top: 0;
					}
				}
			`}
	}

	.form-group input {
		margin: 0.2rem 0;
		${props =>
			props.authForm &&
			css`
				margin-top: 2.3rem;
			`}
	}

	.submit-btn {
		margin: 0 auto;
		margin-top: 3.5rem;
		border-radius: 50px;
		padding: 0.8rem 5rem;
		background: #f86150;
		display: block;
		margin-bottom: 5rem;
		text-align: center;
		cursor: pointer;
		border: none;
		font-size: 1.2rem !important;
		color: white;
		transition: ease 0.3s all;

		&:hover {
			transform: scale(1.03);
		}
	}
`;

export default FormComponent;
