import React from "react";
import { Card, Link, Img, Price, CardTitle, Review } from "../styled";
import Stars from "../Stars";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiences" />

        <Price>{props.price}</Price>
        <CardTitle>{props.title}</CardTitle>

        <div>
          <Stars />
          <Review>{props.review}</Review>
        </div>
      </Link>
    </Card>
  );
}
