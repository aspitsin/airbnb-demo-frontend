import React from "react";
import styled from "styled-components";
import star from "../Stars/Star.png";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Homes" />
        <CardTitle>{props.title}</CardTitle>
        <Description>{props.descrip}</Description>
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

const Star = styled.img`
  color: #008489;
  margin-right: 4px;
`;

const CardTitle = styled.h2`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const Description = styled.p`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0.4rem;
  margin-top: 0.3rem;
  @media (min-width: 768px) {
    line-height: 1.2rem;
    margin-bottom: 0.4rem;
  }
`;

const Superhost = styled.span`
  font-size: 0.8rem;
  line-height: 1rem;
  position: absolute;
  padding-top: 0.05rem;
  padding-left: 0.2rem;
`;

const Card = styled.div`
  display: flex;
`;

const Link = styled.a`
  display: block;
`;

const Img = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 0.75rem;
`;
