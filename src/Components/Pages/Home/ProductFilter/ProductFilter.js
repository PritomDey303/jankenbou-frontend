import React from "react";
import { Container } from "react-bootstrap";
import FilterBox from "./FilterBox/FilterBox";
import "./ProductFilter.css";
export default function ProductFilter({ setPosts }) {
  return (
    <div className="py-5 bg_blue product-filter">
      <Container>
        <h2 className="mx-auto text-center text-light">Explore Here</h2>
        <p className="lead text-center text-dark">
          Life is hard enough already. Let us make it a little easier.
        </p>
        <FilterBox setPosts={setPosts} />
      </Container>
    </div>
  );
}
