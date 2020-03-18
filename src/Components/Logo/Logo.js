/**
 * The logo component
 * Makes the logo responsive and applies the necessary styles
 */
import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			height: "48px",
			[theme.breakpoints.down("xs")]: {
				height: "32px",
			},
		},
	}),
);

const Logo = () => {
	const classes = useStyles();
	return (
		<Typography variant={"h2"} style={{fontSize: "32px", fontWeight: "bold"}}>
			<Link to="/">TICKETR</Link>
		</Typography>
	);
};

export default Logo;
