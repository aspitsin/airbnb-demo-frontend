import React from "react";
import styled from "styled-components";
import Dates from "./Dates/index";
import Guests from "./Guests/index";
import RoomType from "./RoomType/index";
import Price from "./Price/index";
import InstantBook from "./InstantBook/index";
import MoreFilters from "./MoreFilter/index";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  background: #fff;
`;

const Filter = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

export default () => {
  return (
    <Filter>
      <div className="container">
        <Wrapper>
          <Dates />
          <Guests />
          <RoomType />
          <Price />
          <InstantBook />
          <MoreFilters />
        </Wrapper>
      </div>
    </Filter>
  );
};
