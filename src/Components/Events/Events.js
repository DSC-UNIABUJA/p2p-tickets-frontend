import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	tile: {},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	gridListTile: {
		cursor: "pointer",
	},
	overlay: {
		minHeight: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		position: "absolute",
		top: "0",
		minWidth: "100%",
		opacity: 0,
		transition: "all .5s ease-in-out",
		padding: theme.spacing(2),
		"&:hover": {
			opacity: 1,
		},
		"& *": {
			color: "white !important",
		},
	},
	titleBar: {
		background:
			"linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
			"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
	},
}));
//

const Events = props => {
	const event = props.event;
	const classes = useStyles();
	const events = new Array(20).fill(0, 0);
	return (
		<div className={classes.root}>
			<GridList cellHeight={250} spacing={8} cols={4}>
				{events.map((_, i) => (
					<GridListTile cols={i % 4 == 0 ? 2 : 1} className={classes.gridListTile}>
						<img
							src={
								"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
							}
						/>
						<GridListTileBar
							title={"Name of Event"}
							subtitle={<span>Venue: Uni Abuja</span>}
							className={classes.titleBar}
							actionIcon={
								<IconButton
									aria-label={`info about Event`}
									className={classes.icon}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
						<div className={classes.overlay}>
							<Typography variant={"h6"}>Uni Abuja Carnival</Typography>
							<Typography>Date: 22nd June</Typography>
							<Typography>Venue: School Campus</Typography>
						</div>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

export default Events;
