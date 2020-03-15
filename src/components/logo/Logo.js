/**
 * The logo component
 * Makes the logo responsive and applies the necessary styles
 */
import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
	return <Typography variant={"h2"}>Logo</Typography>;
};

export default Logo;
