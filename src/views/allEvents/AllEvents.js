import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import styled from "styled-components";

const AllEventsStyle = styled.div`
  .mainHeader {
    text-align: center;
  }
`;

const AllEvents = () => {
  return (
    <Wrapper>
      <AllEventsStyle>
        <h1 className="mainHeader">All Events</h1>
      </AllEventsStyle>
    </Wrapper>
  );
};

export default AllEvents;
