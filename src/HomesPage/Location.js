import React from "react";
import styled from "styled-components";
import location from "./location.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Location = styled.span`
  position: fixed;
  right: 15rem;
  top: 25rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  box-sizing: border-box;
  border: 0.0625rem solid rgba(72, 72, 72, 0.16);
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.16);
  border-radius: 1.25rem;
  background-image: url(${location});
  background-size: 1rem 1.25rem;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <Location />
  </Wrapper>
);
