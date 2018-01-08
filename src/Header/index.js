import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import Search from "./Search";
import Logo from "./Logo";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Header = styled.header``;

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
