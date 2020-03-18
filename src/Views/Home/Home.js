import React, {useEffect} from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Home from "./homeStyle";
import Events from "../../Components/Events/Events";
import {Link, useLocation} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const HomeComponent = () => {
	// scroll to top on mount
	const {pathname} = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Wrapper>
			<Home>
				<Typography variant={"h5"} align={"center"} style={{fontWeight: 400}}>
					Buy Event Tickets
				</Typography>
				<Events />
			</Home>
		</Wrapper>
	);
};

export default HomeComponent;
