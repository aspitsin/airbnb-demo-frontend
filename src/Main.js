import React, { Component } from "react";
import styled from "styled-components";
import Landing from "./Landing";
import Footer from "./Footer";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 29rem;
`;

export default () => (
  <div>
    <Container>
      <Landing />
      <Footer />
    </Container>
  </div>
);
