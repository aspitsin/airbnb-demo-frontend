import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import Search from "./Search";
import Logo from "./Logo";

const Header = styled.header`
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0px 0.03rem 0px rgba(72, 72, 72, 0.3);
  z-index: 2;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <Logo />
          <Search />
          <Nav />
        </Wrapper>
      </div>
    </Header>
  );
};
