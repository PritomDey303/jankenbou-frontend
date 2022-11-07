import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import ProductCard from "./ProductCard/ProductCard";
import ProductFilter from "./ProductFilter/ProductFilter";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  return (
    <div className="section pt-3 pb-5">
      <HomeBanner />
      <ProductFilter setPosts={setPosts} />
      <ProductCard posts={posts} />
    </div>
  );
}
