import React from "react";
import { Title, Wrapper } from "../styled";
import img1 from "./Paris.png";
import img2 from "./Miami.png";
import img3 from "./Tokyo.png";
import img4 from "./Capetown.png";
import img5 from "./Seoul.png";
import img6 from "./LosAng.png";
import Card from "./Card";

export default () => {
  return (
    <section>
      <Title>Featured destinations</Title>

      <div className="row">
        <Wrapper>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img1} city="Paris" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img2} city="Miami" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img3} city="Tokyo" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img4} city="CapeTown" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img5} city="Seoul" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card image={img6} city="Los Angeles" />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
