import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: "0 auto"
	},
	centerHeader: {
		textAlign: "center"
	},
	centerCardActions: {
		textAlign: "center",
		margin: "0 auto",
		display: "block",
		borderTop: "1px solid #ccc"
	},
	cardActionButtons: {
		fontWeight: "bold"
	},
	cardTextArea: {
		paddingTop: 0,
		paddingBottom: "1rem"
	},
	date: {
		color: "#da683e",
		fontWeight: "bold",
		marginBottom: 0
	},
	location: {
		color: "#808395",
		fontWeight: "bold",
		marginBottom: 0,
		marginTop: "0.5rem"
	}
});

const IndividualEvent = props => {
	const event = props.event;
	const classes = useStyles();
	const { id, name, date, location, time } = event;
	return (
		<Card elevation={6} className={classes.root}>
			<Link
				style={{ color: "inherit", textDecoration: "none" }}
				to={`/event/${id}`}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="200"
						image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
						title="Contemplative Reptile"
					/>

					<CardContent className={classes.cardTextArea}>
						<h2 className={classes.cardHeader}>Name of event</h2>
						<p className={classes.date}>date, time</p>
						<p className={classes.location}>location of event</p>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions className={classes.centerCardActions}>
				<Button
					className={classes.cardActionButtons}
					size="small"
					color="primary"
				>
					Share
				</Button>
				<Link
					style={{ color: "inherit", textDecoration: "none" }}
					to={`/event/${id}`}
				>
					<Button
						className={classes.cardActionButtons}
						size="small"
						color="primary"
					>
						Learn More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default IndividualEvent;
