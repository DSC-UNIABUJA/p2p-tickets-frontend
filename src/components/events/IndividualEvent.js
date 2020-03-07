import React from "react";

const IndividualEvent = props => {
  const event = props.event;
  return (
    <div className="eventCard">
      <h2 className="eventHeader">{event.login}</h2>
      <p className="eventAbout">{event.id}</p>
    </div>
  );
};

export default IndividualEvent;
