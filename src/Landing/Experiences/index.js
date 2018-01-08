import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { SeeAll, SliderArrow, Slider } from "../styled";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import Card from "./Card";

const Arrow = SliderArrow.extend`
  top: 40%;
`;

export default () => {
  return (
    <section>
      <Title>
        Experiences
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="container">
        <div className="row">
          <Slider>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                title="Forest Therapy"
                image={img1}
                price="29$"
                review="44 reviews"
              />
            </div>

            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                title="Whale watching"
                image={img2}
                price="69$"
                review="46 reviews"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                title="Table Mountain Summit, Cable Car Downing"
                image={img3}
                price="69$"
                review="44 reviews"
              />
            </div>

            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                title="Salsa night"
                image={img4}
                price="50$"
                review="44 reviews"
              />
            </div>
            <Arrow />
          </Slider>
        </div>
      </div>
    </section>
  );
};
