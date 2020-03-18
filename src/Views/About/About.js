import React from "react";
import {Helmet} from "react-helmet";
import Wrapper from "../../Components/Wrapper/Wrapper";
import styled from "styled-components";

const AboutStyle = styled.div`
	.text-center {
		text-align: center;
	}
`;

const About = () => {
	return (
		<>
			<Helmet>
				<title>About | Ticketr</title>
			</Helmet>
			<Wrapper>
				<AboutStyle>
					<h1 className="text-center">About Page</h1>
					<p className="text-center">add stuff here later</p>
				</AboutStyle>
			</Wrapper>
		</>
	);
};

export default About;
