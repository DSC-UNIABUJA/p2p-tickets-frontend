import React, {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import IndividualEvent from "./IndividualEvent";
import {getEvents} from "../../store/actions/eventAction";
import {fade, makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import {setAlert} from "../../store/actions/alertAction";
import Loader from "../Loader/Loader";
import TextField from "@material-ui/core/TextField";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},

	search: {
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		margin: "1rem auto 2rem auto",
		display: "block",
		textAlign: "center",
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	inputRoot: {
		color: "inherit",
		width: "70%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
	},
	inputInput: {
		padding: ".5rem 2rem",
		transition: theme.transitions.create("width"),
		width: "70%",
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
		textAlign: "center",
		border: "2px solid #888",
		borderRadius: "2px",
		[theme.breakpoints.up("sm")]: {
			// width: 200,
			"&:focus": {
				// width: 200
			},
		},
	},
}));

const Events = props => {
	const classes = useStyles();

	const {allEvents, getEvents, setAlert, errMsg} = props;
	useEffect(() => {
		getEvents();
	}, [getEvents]);

	const displayEvents = () => {
		if (allEvents === null && errMsg === "") {
			return <Loader />;
		} else if (Array.isArray(allEvents)) {
			// display only latest 9 events on the landing page
			return allEvents.slice(0, 9).map((event, i) => {
				return (
					<Fragment key={i}>
						<Grid item xs={12} sm={4}>
							<IndividualEvent event={event} />
						</Grid>
					</Fragment>
				);
			});
		} else {
			setAlert(errMsg, "error");
			return (
				<p
					style={{
						fontWeight: "bold",
						textAlign: "center",
						color: "red",
						width: "100%",
						marginLeft: 0,
						marginRight: 0,
						fontSize: "1.1rem",
					}}
				>
					{errMsg}
				</p>
			);
		}
	};
	return (
		<>
			<div className="classes.root">
				<div className={classes.search}>
					{Array.isArray(allEvents) && (
						<TextField
							fullWidth={true}
							placeholder="Search for any event"
							inputProps={{"aria-label": "search"}}
						/>
					)}
				</div>
				<div className={classes.root}>
					<GridList cellHeight={180}>{displayEvents()}</GridList>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = state => ({
	allEvents: state.events.allEvents,
	errMsg: state.events.errMsg,
});

const mapDispatchToProps = {
	getEvents,
	setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
