import React from "react";
import styled from "styled-components";
import Dates from "./Dates/index";

const Filter = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 12px;
  padding-bottom: 12px;
  position: absolute;
  top: 84px;
  background: #fff;
`;

export default () => {
  return (
    <Filter>
      <div className="container">
        <Dates />
      </div>
    </Filter>
  );
};
