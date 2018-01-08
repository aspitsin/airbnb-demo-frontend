import React from "react";
import {
  Card,
  Link,
  Img,
  CardInfo,
  Price,
  CardTitle,
  Rating,
  Review
} from "../styled";
import Star from "/FRONTEND/airbnb-frontend/src/Landing/Stars/index";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiences" />
        <CardInfo>
          <Price>{props.price}</Price>
          <CardTitle>{props.title}</CardTitle>
        </CardInfo>
        <Rating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Review>{props.review}</Review>
        </Rating>
      </Link>
    </Card>
  );
}
