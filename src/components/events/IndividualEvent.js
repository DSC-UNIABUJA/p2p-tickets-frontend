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
    display: "block"
  }
});

const IndividualEvent = props => {
  const event = props.event;
  const classes = useStyles();
  const id = event.id;
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
            height="140"
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />

          <CardContent>
            <h2 className={classes.centerHeader}>{event.login}</h2>

            <p>
              <span>{id}</span>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </p>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.centerCardActions}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default IndividualEvent;
