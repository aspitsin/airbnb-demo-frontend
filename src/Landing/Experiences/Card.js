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

export const Price = styled.div``;
export const CardTitle = styled.div``;
export const Review = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const Link = styled.a`
  display: block;
`;
export const Card = styled.div`
  display: flex;
`;
