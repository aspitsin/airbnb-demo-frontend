import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const List = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.p`
  margin-right: 0.5rem;
`;

const Link = styled.a`
  padding: 0.5rem;
  color: #383838;
  text-align: center;
  text-decoration: none;
`;

export default () => {
  return (
    <Nav>
      <List>
        <Button>
          <Link href="">Become a host</Link>
        </Button>
        <Button>
          <Link href="">Help</Link>
        </Button>
        <Button>
          <Link href="">Sign Up</Link>
        </Button>
        <Button>
          <Link href="">Log In</Link>
        </Button>
      </List>
    </Nav>
  );
};
