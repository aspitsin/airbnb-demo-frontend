import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiences" />

        <Price>{props.price}</Price>
        <CardTitle>{props.title}</CardTitle>

        <Stars />
        <Review>{props.review}</Review>
      </Link>
    </Card>
  );
}

const Price = styled.div`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const CardTitle = styled.div`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const Review = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Link = styled.a`
  display: block;
`;
const Card = styled.div`
  display: flex;
`;
