import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndividualEvent from "./IndividualEvent";
import { getEvents } from "../../store/actions/eventAction";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import { setAlert } from "../../store/actions/alertAction";
import Loader from "../loader/Loader";
import styled from "styled-components";

const EventStyle = styled.div`
  color: #333;
  .eventHeader {
    font-size: 2rem;
  }
`;

const Button = styled.div`
  margin: 3.4rem auto 0 auto;
  text-align: center;
  display: block;

  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: inherit;
    border-radius: 50px;
    padding: 0.8rem 3.2rem;
    background: white;
    border-radius: 6px;
    border: 2px solid #ccc;
    font-family: inherit;
    font-weight: bold;
    transition: ease-in-out 0.4s;

    &:hover {
      background: transparent;
      border: 2px solid #555;
      transform: scale(1.03);
    }
  }
`;

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

  const { match, location, allEvents, getEvents, setAlert } = props;
  useEffect(() => {
    getEvents();
  }, [allEvents, getEvents]);

  useEffect(() => {
    if (allEvents === "Network Error") {
      setAlert("Please check your internet connection", "error");
    }
  }, [allEvents, setAlert]);

  const displayEvents = () => {
    if (allEvents === null) {
      return <Loader />;
    } else if (Array.isArray(allEvents)) {
      return allEvents.map((event, i) => {
        return (
          <>
            <Grid key={i} item xs={12} sm={4}>
              <IndividualEvent event={event} />
            </Grid>
          </>
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
    <EventStyle>
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
        {Array.isArray(allEvents) && (
          <Button>
            <Link to="/all-events">See more</Link>
          </Button>
        )}
      </div>
    </EventStyle>
  );
};

const mapStateToProps = state => ({
  allEvents: state.events.allEvents
});

const mapDispatchToProps = {
  getEvents,
  setAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
