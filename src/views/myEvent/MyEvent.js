import React from 'react'
import Wrapper from "../../components/wrapper/Wrapper"

const MyEvent = () => {
  return (
    <Wrapper>
      <h1>My Event</h1>
      <p>
        This will be a page that lists a particular event of an event owner. The
        route will be `/my-event/:eventId`
      </p>
    </Wrapper>
  );
}

export default MyEvent

