import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 56px;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Top />
        <Bottom />
      </div>
    </Footer>
  );
}
