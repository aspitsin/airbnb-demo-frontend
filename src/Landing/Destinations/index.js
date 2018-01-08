import React from "react";
import styled from "styled-components";
import { List, Card, Link, Title, Image, SliderArrow, Slider } from "../styled";
import img1 from "./Paris.png";
import img2 from "./Miami.png";
import img3 from "./Tokyo.png";
import img4 from "./Capetown.png";
import img5 from "./Seoul.png";
import img6 from "./LosAng.png";

const Destinations = styled.section``;

const City = styled.p`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const Arrow = SliderArrow.extend`
  top: 40%;
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <div className="row">
        <Slider>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img1} alt="" />
              <City>Paris</City>
            </Link>
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img2} alt="" />
              <City>Miami</City>
            </Link>
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img3} alt="" />
              <City>Tokyo</City>
            </Link>
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img4} alt="" />
              <City>Cape town</City>
            </Link>
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img5} alt="" />
              <City>Seoul</City>
            </Link>
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Link href="/">
              <Image src={img6} alt="" />
              <City>Los Angeles</City>
            </Link>
          </div>

          <Arrow />
        </Slider>
      </div>
    </Destinations>
  );
};
