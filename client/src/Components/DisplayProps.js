import React from "react";

const DisplayProps = (props) => {
  return <pre>{JSON.stringify(props, undefined, 4)}</pre>;
};

export default DisplayProps;
