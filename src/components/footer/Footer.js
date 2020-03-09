import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.footer`
	background: #333;
	color: white;
	padding: 0.3rem;
	text-align: center;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;

	& > * {
		display: block;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	.brandName {
		transition: ease-in-out 0.4s;

		&:hover {
			transform: scale(1.1);
		}
		a {
			text-decoration: none;
			color: white;
		}
	}
`;

// on here, there should be about, pricing and contact links.
export default () => {
	return (
		<Footer>
			<p>
				<small>&copy;</small> {new Date().getFullYear()}
			</p>{" "}
			<h2 className="brandName">
				<Link to="/">Ticketr</Link>
			</h2>
		</Footer>
	);
};
