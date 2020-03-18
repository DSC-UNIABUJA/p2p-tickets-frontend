import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		cursor: "pointer",
		"&: hover": {
			background: "green",
		},
	},
	tile: {
		backgroundColor: "green",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	overlay: {
		minHeight: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		position: "absolute",
		top: "0",
		minWidth: "100%",
		opacity: 0,
		transition: "all .5s ease-in-out",
		"&:hover": {
			opacity: 1,
		},
	},
}));
//

const IndividualEvent = props => {
	const event = props.event;
	const classes = useStyles();
	const {id, name, date, location, time} = event;
	return (
		<GridListTile className={classes.root}>
			<img src={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"} />
			<GridListTileBar
				title={"Name of Event"}
				subtitle={<span>Venue: Uni Abuja</span>}
				className={classes.tile}
				actionIcon={
					<IconButton aria-label={`info about Event`} className={classes.icon}>
						<InfoIcon />
					</IconButton>
				}
			/>
			<div className={classes.overlay} />
		</GridListTile>
	);
};

export default IndividualEvent;
