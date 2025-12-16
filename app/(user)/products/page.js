import React from "react";
import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {
  const searchParam = await searchParams;
  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;
  return (
    <>
      <h1>
        Showing {category} Products, sorted by {sort}, page {page}
      </h1>
      <ProductList />
    </>
  );
};

export default Products;
