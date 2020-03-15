import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

const useStyles = makeStyles(theme =>
	// @ts-ignore
	createStyles({
		// TODO extract this object to wrapper
		// Can't do that until I see how we end up structuring the code
		"@global": {
			body: {
				"& a": {
					color: "inherit !important",
					textDecoration: "none",
					transition: "all .5s ease-in-out",
					"&:hover": {
						color: "#BDC3D2",
					},
				},
			},
		},
		paper: {
			width: "100%",
			position: "absolute",
			padding: `${theme.spacing(0.8)}px ${theme.spacing(2)}px`,
			bottom: 0,
			zIndex: theme.zIndex.appBar,
		},
		[theme.breakpoints.down("xs")]: {
			socials: {
				height: "16px",
				paddingBottom: theme.spacing(3),
				paddingTop: theme.spacing(1),
			},
		},
	}),
);

const Footer = () => {
	// Classes
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={2}>
			<Grid container justify={"space-between"} alignItems={"center"}>
				<Grid item xs={12} sm={6} md={4} style={{textAlign: "center"}}>
					<Typography variant={"caption"}>Copyright 2020 LITETELLER</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={4} container justify={"space-between"}>
					<Typography variant={"caption"}>
						<Link to={"/"}>Terms of Use</Link>
					</Typography>
					<span>|</span>
					<Typography variant={"caption"}>
						<Link to={"/"}>Privacy Policy</Link>
					</Typography>
					<span>|</span>
					<Typography variant={"caption"}>
						<Link to={"/"}>Contact us</Link>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={4} container justify={"space-evenly"}>
					<Link to={"/"} className={classes.socials}>
						<img alt={"facebook profile"} height={20} src={facebookIcon} />
					</Link>
					<Link to={"/"} className={classes.socials}>
						<img alt={"Instagram profile"} height={20} src={instagramIcon} />
					</Link>
					<Link to={"/"} className={classes.socials}>
						<img alt={"Twitter Profile"} height={20} src={twitterIcon} />
					</Link>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Footer;
