import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "../../StyledComponents/utils";

const Wrapper = props => {
  return (
    <div>
      <Header {...props} />
      <Container>{props.children}</Container>
      <Footer {...props} />
    </div>
  );
};

export default Wrapper;
