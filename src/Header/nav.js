import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const Link = styled.a`
  padding: 0.5rem;
  color: #383838;
  text-align: center;
  text-decoration: none;
  margin-right: 0.5rem;
  padding-top: 1rem;
`;

export default () => {
  return (
    <Nav>
      <Link href="">Become a host</Link>
      <Link href="">Help</Link>
      <Link href="">Sign Up</Link>
      <Link href="">Log In</Link>
    </Nav>
  );
};
