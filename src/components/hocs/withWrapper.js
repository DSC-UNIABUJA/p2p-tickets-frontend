import React from "react";

const withWrapper = Component => {
  return props => <Component {...props} />;
};

export default withWrapper;
