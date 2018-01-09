import React from "react";
import { Title, Wrapper } from "../styled";
import { SeeAll } from "../styled";
import img1 from "./relax.png";
import img2 from "./privatebedr.png";
import img3 from "./TropicalHouse.png";
import Card from "./Card";

export default () => {
  return (
    <section>
      <Title>
        Homes
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="container">
        <div className="row">
          <Wrapper>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                image={img1}
                title="$82 La Salentina, see, nature & relax"
                descrip="Entire house · 9 beds"
                hosts="97 · Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                image={img2}
                title="$82 Your private 3 bedr. riad and exclusi..."
                descrip="Entire house · 5 beds"
                hosts="161 · Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                image={img3}
                title="$200 Dreamy Tropical Tree House"
                descrip="Entire treehouse · 1 bed"
                hosts="364 · Superhost"
              />
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};
