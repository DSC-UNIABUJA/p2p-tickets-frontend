import React, {useEffect} from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Home from "./homeStyle";
import Events from "../../Components/Events/Events";
import {useLocation} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const HomeComponent = () => {
	// scroll to top on mount
	const {pathname} = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Wrapper>
			<Home>
				<Grid container={true} justify={"center"}>
					<Grid item={true} xs={12} md={6}>
						<TextField
							fullWidth
							style={{marginBottom: "64px"}}
							placeholder={"Search for event"}
						/>
					</Grid>
				</Grid>
				<Events />
			</Home>
		</Wrapper>
	);
};

export default HomeComponent;
