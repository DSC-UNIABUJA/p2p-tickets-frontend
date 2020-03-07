import styled, { css, keyframes } from "styled-components";

const blink = keyframes`
50% {
      border-color: transparent;
    }
`;

// add styles here, create other files to import, include from if need be
const HomeComponent = styled.div`
  .mainHeader {
    text-align: center;
    font-size: 3rem;
  }

  .mainParagraph {
    font-size: 1.8rem;
    font-weight: bold;
  }

  p {
    /* max-width: 750px; */
    margin: 0 auto;
    text-align: center;
  }

  .secondHeader,
  .thirdHeader {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 3rem;
  }

  .secondHeaderParagraph,
  .thirdHeaderParagraph {
    text-align: center;
    font-size: 1.1rem;
  }

  .secondHeaderParagraph {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  .typewriterEffect {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .thirdHeaderParagraph {
    font-size: 1.2rem;
    max-width: 700px;
  }

  .sellTicketLists {
    list-style: none;
    max-width: 700px;
    text-align: center;
    margin: 2rem auto 1rem auto;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0;

    li {
      margin-bottom: 1rem;

    }
  }
`;

export default HomeComponent;
