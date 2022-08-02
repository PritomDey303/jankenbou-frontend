import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import ProductCard from "./ProductCard/ProductCard";
import ProductFilter from "./ProductFilter/ProductFilter";

export default function Home() {
  return (
    <div className="section pt-3 pb-5">
      <HomeBanner />
      <ProductFilter />
      <ProductCard />
    </div>
  );
}
