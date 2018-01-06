import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { Card, Link, SeeAll, Image, SliderArrow, Slider } from "../styled";
import img1 from "./relax.png";
import img2 from "./privatebedr.png";
import img3 from "./TropicalHouse.png";
import StarWrapper from "../Stars/index";

const Homes = styled.section`
  position: relative;
`;

const CardTitle = styled.h2`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
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
  line-height: 1.2rem;
  margin-bottom: 0.4rem;
  @media (min-width: 768px) {
    line-height: 1.2rem;
    margin-bottom: 0.4rem;
  }
`;

const Superhost = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Arrow = SliderArrow.extend`
  top: 40%;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="row">
        <Slider>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img1} alt="" />
                <CardTitle>$82 La Salentina, see, nature & relax</CardTitle>
              </Link>
              <Description>Entire house · 9 beds</Description>
              <StarWrapper />
              <Superhost>97 · Superhost</Superhost>
            </Card>
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img2} alt="" />
                <CardTitle>
                  $82 Your private 3 bedr. riad and exclusi...
                </CardTitle>
              </Link>
              <Description>Entire house · 5 beds</Description>
              <StarWrapper />
              <Superhost>161 · Superhost</Superhost>
            </Card>
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img3} alt="" />
                <CardTitle>$200 Dreamy Tropical Tree House</CardTitle>
              </Link>
              <Description>Entire treehouse · 1 bed</Description>
              <StarWrapper />
              <Superhost>364 · Superhost</Superhost>
            </Card>
          </div>

          <Arrow />
        </Slider>
      </div>
    </Homes>
  );
};
