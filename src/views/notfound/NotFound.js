import React from "react";
import { Helmet } from "react-helmet";
import Wrapper from "../../components/wrapper/Wrapper";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundStyle = styled.div`
	.text-center {
		text-align: center;
	}

	.goHome {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;

		.goHomeLink {
			text-decoration: none;
			color: white;
			background: #3672a4;
			padding: 0.7rem 2.3rem;
			border-radius: 1.2rem;
			display: inline-block;
			margin: 0 auto;
			text-align: center;
			transition: 0.5s all ease-in-out;
			font-weight: bold;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
`;

const NotFound = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Not Found | Ticketr</title>
			</Helmet>
			<div
				style={{
					height: "60vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<NotFoundStyle>
					<h1 className="text-center">
						{" "}
						Error 404{" "}
						<span role="img" aria-label="Sad Emoji">
							😓
						</span>
					</h1>

					<h2 className="text-center">
						Sorry{" "}
						<span role="img" aria-label="Sob Emoji">
							😪
						</span>
						, the page you requested may have been deleted or never existed.{" "}
					</h2>

					<div className="goHome">
						<Link to="/" className="goHomeLink">
							Go Home
						</Link>
					</div>
				</NotFoundStyle>
			</div>
		</Wrapper>
	);
};

export default NotFound;
