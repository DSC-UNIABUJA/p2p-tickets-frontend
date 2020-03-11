import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Wrapper from "../../components/wrapper/Wrapper";
import styled from "styled-components";

const AllEventsStyle = styled.div`
	.mainHeader {
		text-align: center;
	}
`;

const AllEvents = () => {
	// scroll to top on mount
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<>
			<Helmet>
				<title>All Events | Ticketr</title>
			</Helmet>
			<Wrapper>
				<AllEventsStyle>
					<h1 className="mainHeader">All Events</h1>
					<p>
						create cards to place all events here. along with their basic
						information and a search bar ontop of the page to search for
						anything
					</p>
				</AllEventsStyle>
			</Wrapper>
		</>
	);
};

export default AllEvents;
