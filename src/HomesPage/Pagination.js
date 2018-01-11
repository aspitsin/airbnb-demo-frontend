import React from "react";
import styled from "styled-components";

const Pagination = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const PageNumber = styled.span`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  color: ${props => (props.isCurrent ? "#fff" : "#0f7276")};
  background-color: ${props => (props.isCurrent ? "#0f7276" : "transparent")};
  border-radius: 1rem;
  cursor: pointer;
  &:last-child {
    margin-right: 4rem;
  }
`;

const Count = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: center;
`;

export default () => (
  <Pagination>
    <Pages>
      <PageNumber isCurrent="true">1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
      <PageNumber>...</PageNumber>
      <PageNumber>17</PageNumber>
    </Pages>
    <Count>1 – 18 of 300+ Rentals</Count>
  </Pagination>
);
