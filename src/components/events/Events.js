import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import EventComponent from "../../StyledComponents/events/Events";
import IndividualEvent from "./IndividualEvent";
import { getEvents } from "../../actions/eventAction";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    // marginLeft: 0,
    margin: "1rem auto 2rem auto",
    display: "block",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "70%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
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
      }
    }
  }
}));

const Events = props => {
  const classes = useStyles();
  // useEffect(() => {
  //   const { event_name } = match.params;
  //   (async () => {
  //     try {
  //       const res = await axios.get(`event/${event_name}`);
  //     } catch (err) {
  //       // catch errors and possibly display them to the client
  //     }
  //   })();
  // });

  const { match, location, allEvents, getEvents } = props;
  useEffect(() => {
    getEvents();
  }, [allEvents, getEvents]);

  const displayEvents = () => {
    if (allEvents === null) {
      return <p>Loading...</p>;
    } else if (Array.isArray(allEvents)) {
      return allEvents.map((event, i) => {
        return (
          <Grid key={i} item xs>
            <Paper elevation={6} className={classes.paper}>
              <IndividualEvent event={event} />
            </Paper>
          </Grid>
        );
      });
    } else {
      return (
        <p style={{ fontWeight: "bold", color: "red", fontSize: "1.1rem" }}>
          {allEvents}
        </p>
      );
    }
  };
  return (
    <EventComponent>
      <div className="classes.root">
        <div className={classes.search}>
          <InputBase
            placeholder="Search for an event"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Grid container spacing={3}>
          {displayEvents()}
        </Grid>
      </div>
    </EventComponent>
  );
};

const mapStateToProps = state => ({
  allEvents: state.events.allEvents
});

const mapDispatchToProps = {
  getEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
