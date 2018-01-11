import React from "react";
import Filter from "./Filter";
import Homes from "./Homes";

export default () => {
  return (
    <section>
      <div className="container">
        <Filter />
        <Homes />
      </div>
    </section>
  );
};
