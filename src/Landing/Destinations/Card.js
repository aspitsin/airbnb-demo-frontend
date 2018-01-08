import React from "react";
import styled from "styled-components";

const Card = styled.li`
  display: flex;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
`;
const City = styled.h3`
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Destinations" />
        <City>{props.city}</City>
      </Link>
    </Card>
  );
}
