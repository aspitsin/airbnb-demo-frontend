import React from "react";
import styled from "styled-components";
import Dates from "./Dates/index";

const Filter = styled.header`
  box-sizing: border-box;
  box-shadow: 0px 0.03rem 0px rgba(72, 72, 72, 0.3);
  border-left: 0 0 0;
  padding-top: 12px;
  padding-bottom: 12px;
  position: fixed;
  top: 82px;
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
