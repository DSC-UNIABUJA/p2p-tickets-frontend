import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from "../../assets/styles/reusable/Container";

const Wrapper = props => {
	return (
		<div>
			<Header {...props} />
			<Container>{props.children}</Container>
			<Footer {...props} />
		</div>
	);
};

export default Wrapper;
