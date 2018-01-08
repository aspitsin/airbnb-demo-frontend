import React from "react";
import styled from "styled-components";
import { Slider, Title, SeeAll, Img, SliderArrow } from "../styled";
import img1 from "./reserv1.png";
import img2 from "./reserv2.png";
import img3 from "./reserv3.png";
import img4 from "./reserv4.png";

const Card = styled.a`
  display: block;
`;

const Reservations = styled.section`
  position: relative;
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

const Arrow = SliderArrow.extend`
  top: 40%;
`;

export default () => {
  return (
    <section>
      <Title>
        Popular reservations around the world
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="container">
        <div className="row">
          <Slider>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card href="/">
                <Img src={img1} alt="" />
                <Category>Speakeasy</Category>
                <CardTitle>Chumley's</CardTitle>
                <AverageCheck>About $60 per person</AverageCheck>
              </Card>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card href="/">
                <Img src={img2} alt="" />
                <Category>Korean gastropub</Category>
                <CardTitle>Hanjan</CardTitle>
                <AverageCheck>About $50 per person</AverageCheck>
              </Card>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card href="/">
                <Img src={img3} alt="" />
                <Category>German american</Category>
                <CardTitle>PrimeMeats</CardTitle>
                <AverageCheck>About $55 per person</AverageCheck>
              </Card>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card href="/">
                <Img src={img4} alt="" />
                <Category>Fine seafood</Category>
                <CardTitle>Seaprice</CardTitle>
                <AverageCheck>About $70 per person</AverageCheck>
              </Card>
            </div>
            <Arrow />
          </Slider>
        </div>
      </div>
    </section>
  );
};
