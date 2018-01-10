import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import Homes from "./Homes";

export default () => {
  return (
    <section>
      <div className="container">
        <Header />
        <Filter />
        <Homes />
      </div>
    </section>
  );
};
