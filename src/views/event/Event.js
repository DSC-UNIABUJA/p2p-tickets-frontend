import React, { useEffect } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import styled from "styled-components";
import { connect } from "react-redux";
import NotFound from "../notfound/NotFound";
import { getEvents } from "../../store/actions/eventAction";
import Loader from "../../components/loader/Loader";

const EventStyle = styled.div`
  .textCenter {
    text-align: center;
  }
`;

const Event = props => {
  const eventId = props.match.params.eventId;
  const { getEvents, allEvents } = props;
  useEffect(() => {
    getEvents();
  }, []);

  const validReturn = (
    <Wrapper>
      <EventStyle>
        <h1 className="mainHeader textCenter">Name of Event</h1>
        <p>id: {eventId}</p>
        <p>idAgain: </p>
      </EventStyle>
    </Wrapper>
  );

  if (allEvents === null ) {
    return <Loader />;
  } else if (
    Array.isArray(allEvents) &&
    allEvents.filter(e => e.id.toString() === eventId).length !== 0
  ) {
    return validReturn;
  } else if (
    Array.isArray(allEvents) &&
    allEvents.filter(e => e.id.toString() === eventId).length === 0
  ) {
    return <NotFound />;
  } else {
    return <Loader />;
  }
};

const mapStateToProps = state => ({
  allEvents: state.events.allEvents
});

const mapDispatchToProps = {
  getEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
