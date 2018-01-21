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

const Card = styled.a``;

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.5rem;
  line-height: 0.6px;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 0.6rem;
    line-height: 1 px;
  }
`;

const CardTitle = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5 rem;
  }
`;

const AverageCheck = styled.span`
  display: block;
  line-height: 1rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 0.75rem;
  line-height: 0.5 rem;
  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 0.5 rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Link = styled.a`
  display: block;
`;
