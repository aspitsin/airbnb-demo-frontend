import React from "react";
import styled from "styled-components";

const Price = styled.div`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  width: 100%;
`;

const Title = styled.p`
  font-family: CircularAir;
  font-size: 14px;
  line: 16px;
`;

export default () => {
  return (
    <Price>
      <Title>Price</Title>
    </Price>
  );
};
