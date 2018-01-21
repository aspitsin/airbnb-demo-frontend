import React from "react";
import styled from "styled-components";
import img1 from "./Card/img1.png";
import img2 from "./Card/img2.png";
import img3 from "./Card/img3.png";
import img4 from "./Card/img4.png";
import img5 from "./Card/img5.png";
import img6 from "./Card/img6.png";
import Card from "./Card/index";
import Maps from "./GoogleMap";
import Location from "./Location";

const Homes = styled.div`
  padding-top: 150px;
`;

export default () => {
  return (
    <Homes>
      <div className="container">
        <div className="row">
          <div className=" col-lg-4">
            <Card
              image={img1}
              title="$82 La Salentina, see, nature & relax"
              description="Entire house · 9 beds"
              hosts="97 · Superhost"
            />
          </div>
          <div className=" col-lg-4">
            <Card
              image={img2}
              title="$82 Your private 3 bedr. riad and exclusi..."
              description="Entire house · 5 beds"
              hosts="161 · Superhost"
            />
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-4">
            <Card
              image={img3}
              title="$200 Dreamy Tropical Tree House"
              description="Entire treehouse · 1 bed"
              hosts="364 · Superhost"
            />
          </div>
          <div className=" col-lg-4">
            <Card
              image={img4}
              title="$110 Best location old town luxury loft"
              description="Entrie apartment  ·  1 bed"
              hosts="369 · Superhost"
            />
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-4">
            <Card
              image={img5}
              title="$83 Lussuoso. Vista incantevole."
              description="Entrie apartment  ·  6 bed"
              hosts="105 · Superhost"
            />
          </div>
          <div className=" col-lg-4">
            <Card
              image={img6}
              title="$72 In the historical center of Lecce"
              description="Entrie house  ·  3 bed"
              hosts="221 · Superhost"
            />
          </div>

          <Maps />
          <Location />
        </div>
      </div>
    </Homes>
  );
};
