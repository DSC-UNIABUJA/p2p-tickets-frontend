import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from "../../assets/styles/reusable/Container";

const Wrapper = props => {
	return (
		<div>
			<Header {...props} />
			<Container>
				{props.children}
				{/*Adds margin for the footer*/}
				<div style={{marginBottom: "100px"}} />
			</Container>
			<Footer {...props} />
		</div>
	);
};

export default Wrapper;
