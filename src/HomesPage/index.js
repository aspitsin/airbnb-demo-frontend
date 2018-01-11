import React from "react";
import Filter from "./Filter";
import Homes from "./Homes";
import Pagination from "./Pagination";
import Help from "./Help";

export default () => {
  return (
    <section>
      <div className="container">
        <Filter />
        <Homes />
        <Pagination />
        <Help />
      </div>
    </section>
  );
};
