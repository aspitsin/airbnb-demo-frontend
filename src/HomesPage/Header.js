import React from "react";
import styled from "styled-components";
import Nav from "../Header/nav";
import Search from "../Header/Search";
import Logo from "../Header/Logo";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  background: #fff;
`;

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
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
