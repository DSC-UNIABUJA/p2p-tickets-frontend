import React, {useEffect} from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Home from "./homeStyle";
import Events from "../../Components/Events/Events";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

const HomeComponent = () => {
	// scroll to top on mount
	const {pathname} = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Wrapper>
			<Home>
				<Events />
			</Home>
		</Wrapper>
	);
};

export default HomeComponent;
