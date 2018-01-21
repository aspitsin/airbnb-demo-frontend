import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../styled";
import img1 from "./experiences.png";
import img2 from "./homes.png";
import img3 from "./restaurants.png";

const Explore = styled.section`
  position: relative;
  margin-top: 124px;
`;

const Card = styled.a`
  border: 1px solid rgba(72, 72, 72, 0.2);
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0.25rem;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 4.5rem;
    align-items: center;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  @media (min-width: 768px) {
    width: 6rem;
    margin-left: -0.0625rem;
    margin-top: -0.0625rem;
    margin-bottom: -0.0625rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const CardTitle = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 4.5rem;
  color: #383838;

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    font-size: 1rem;
  }
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="/homes">
            <Image src={img1} alt="" />
            <CardTitle>Homes</CardTitle>
          </Card>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="#">
            <Image src={img2} alt="" />
            <CardTitle>Experiences</CardTitle>
          </Card>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="#">
            <Image src={img3} alt="" />
            <CardTitle>Restaurants</CardTitle>
          </Card>
        </div>
      </Slider>
    </Explore>
  );
};
