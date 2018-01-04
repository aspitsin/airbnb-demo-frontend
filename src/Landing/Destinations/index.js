import React from "react";
import styled from "styled-components";
import { List, Card, Link, Title, Image, SliderArrow } from "../styled";
import img1 from "./Paris.svg";
import img2 from "./Miami.svg";
import img3 from "./Tokyo.svg";
import img4 from "./CaperTown.svg";
import img5 from "./Seul.svg";
import img6 from "./LosAn.svg";

const Destinations = styled.section``;

const City = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const Arrow = SliderArrow.extend`
  top: 5.6rem;
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <div className="row">
        <List>
          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img1} alt="" />
                <City>Paris</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img2} alt="" />
                <City>Miami</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img3} alt="" />
                <City>Tokyo</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img4} alt="" />
                <City>Cape town</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img5} alt="" />
                <City>Seoul</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img6} alt="" />
                <City>Los Angeles</City>
              </Link>
            </Card>
          </div>

          <Arrow />
        </List>
      </div>
    </Destinations>
  );
};
