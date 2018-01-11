import React from "react";
import styled from "styled-components";
import star from "../Stars/Star.png";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiences" />

        <Price>{props.price}</Price>
        <CardTitle>{props.title}</CardTitle>
        <div>
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Reviews>{props.review}</Reviews>
        </div>
      </Link>
    </Card>
  );
}
const Star = styled.img`
  color: #008489;
  margin-right: 4px;
`;

const Price = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.7rem;
  padding-right: 0.5rem;
`;

const CardTitle = styled.h2`
  display: inline;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Reviews = styled.span`
  font-size: 0.75rem;
  line-height: 0.9rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Link = styled.a`
  display: block;
`;
const Card = styled.div``;
