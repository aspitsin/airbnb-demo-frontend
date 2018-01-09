import React from "react";
import Header from "./Header";
import Filter from "./Filter";

export default () => {
  return (
    <section>
      <div className="container">
        <Header />
        <Filter />
      </div>
    </section>
  );
};
