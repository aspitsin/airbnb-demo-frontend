import React from "react";
import styled from "styled-components";
import star from "./star.png";

const Star = styled.img`
  color: #008489;
  margin-right: 4px;
  padding-top: 8px;
`;

const Title = styled.h2`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 0.4rem;
  }
`;

const Description = styled.p`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;

  margin-bottom: 0.4rem;
  @media (min-width: 768px) {
    line-height: 0.4rem;
    margin-bottom: 0.5rem;
  }
`;

const Superhost = styled.span`
  font-size: 0.8rem;
  line-height: 1rem;
  position: absolute;
  padding-top: 0.45rem;
  padding-left: 0.2rem;
`;

const Card = styled.div`
  margin-bottom: 40px;
`;

const Link = styled.a``;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Homes" />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Superhost>{props.hosts}</Superhost>
      </Link>
    </Card>
  );
}
