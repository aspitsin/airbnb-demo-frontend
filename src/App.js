import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div``;
class App extends Component {
  render() {
    return (
      <Row>
        <Container>
          <Header />
        </Container>
      </Row>
    );
  }
}

export default App;
