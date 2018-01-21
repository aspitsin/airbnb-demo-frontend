import React from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
`;

export default () => {
  return (
    <Main>
      <div className="container">
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </div>
    </Main>
  );
};
