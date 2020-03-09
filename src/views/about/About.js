import React from 'react';
import Wrapper from "../../components/wrapper/Wrapper"
import styled from "styled-components"

const AboutStyle = styled.div`
  .text-center {
    text-align: center;
  }
`

const About = () => {
  return (
    <Wrapper>
      <AboutStyle>
        <h1 className="text-center">About Page</h1>
        <p className="text-center">add stuff here later</p>
      </AboutStyle>
    </Wrapper>
  );
}

export default About

