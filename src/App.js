import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 29rem;
`;

class App extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Landing />
        <Footer />
      </Box>
    );
  }
}

export default App;
