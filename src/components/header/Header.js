import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Logo from "../logo/Logo";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// if authorized, "create event" should lead to "/dashboard/overview", if not, it should lead to sign-in
const useStyles = makeStyles(theme =>
	createStyles({
		root: {},
		paper: {
			width: "100%",
			padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
			zIndex: theme.zIndex.appBar,
		},
		button: {
			textTransform: "capitalize",
		},
		icon: {
			marginLeft: "1rem",
		},
		iconA: {
			// color: 'white !important',
			backgroundColor: theme.palette.primary.light,
		},
		toolbar: {
			...theme.mixins.toolbar,
		},
		nav: {
			[theme.breakpoints.up("sm")]: {
				justifyContent: "space-between",
			},
		},
	}),
);

const Nav = () => {
	// Css classes
	const classes = useStyles();

	const [mode, setMode] = React.useState("light");

	// Changes the mode of the UI
	const changeMode = () => {
		const m = mode === "light" ? "dark" : "light";
		localStorage.setItem("mode", m);
		setMode(m);
	};

	return (
		<>
			<Grid container>
				<Paper elevation={4} className={classes.paper}>
					<Grid
						container
						className={classes.nav}
						alignItems={"center"}
						justify={"space-between"}
					>
						<Grid item sm={3}>
							<Logo />
						</Grid>
						<Grid item sm={8} xs={5} container justify={"flex-end"}>
							<Button
								variant={"outlined"}
								color={"primary"}
								className={classes.button}
							>
								Create Event
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<div className={classes.toolbar} />
		</>
	);
};

export default Nav;
