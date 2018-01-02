import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const logo = styled.img'
  color: black;
';

export default function() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </div>
  );
}
