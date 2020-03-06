import styled, { css } from "styled-components";

// add styles here, create other files to import, include from if need be
const HomeComponent = styled.div`
.mainHeader {
  text-align: center;
  font-size: 2.5rem;
}

p {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}

.secondHeader {
  text-align: center;
  font-size: 2rem;
}

.thirdHeader {
  font-size: 1.6rem;
  text-align: center;
}

.secondHeaderParagraph, .thirdHeaderParagraph {
  text-align: center;
  font-size: 1.1rem;
}

.secondHeaderParagraph {
  margin-bottom: 2rem;
}
`;

export default HomeComponent;
