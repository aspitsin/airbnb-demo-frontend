import React from "react";
import { Title, SeeAll, Wrapper } from "../styled";
import img1 from "./reserv1.png";
import img2 from "./reserv2.png";
import img3 from "./reserv3.png";
import img4 from "./reserv4.png";
import Card from "./Card";

export default () => {
  return (
    <section>
      <Title>
        Popular reservations around the world
        <SeeAll href="/">See all</SeeAll>
      </Title>

      <div className="row">
        <Wrapper>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              image={img1}
              cat="Speakeasy"
              title="Chumley's"
              check="About $60 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              image={img2}
              cat="Korean gastropub"
              title="Hanjan"
              check="About $50 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              image={img3}
              cat="German american"
              title="PrimeMeats"
              check="About $55 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              image={img4}
              cat="Fine seafood"
              title="Seaprice"
              check="About $70 per person"
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
