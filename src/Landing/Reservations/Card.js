import React from "react";
import styled from "styled-components";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiences" />

        <Category>{props.cat}</Category>
        <CardTitle>{props.title}</CardTitle>
        <AverageCheck>{props.check}</AverageCheck>
      </Link>
    </Card>
  );
}

const Card = styled.a`
  display: block;
`;

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.6rem;
  line-height: 0.75px;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.6rem;
    line-height: 0.75px;
  }
`;

const CardTitle = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

const AverageCheck = styled.span`
  display: block;
  line-height: 1rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
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
