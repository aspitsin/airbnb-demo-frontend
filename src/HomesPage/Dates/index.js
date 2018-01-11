import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  padding: 7px 16px;
  font-size: 14px;

  color: #383838;
`;

export default () => {
  return <Button>Dates</Button>;
};
