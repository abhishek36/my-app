"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const searchParams = useSearchParams();
  const pages = searchParams.getAll("page");
  const category = searchParams.getAll("category");
  const entries = Object.fromEntries(searchParams.entries());
  console.log(entries);
  return <div>Client</div>;
};

export default ProductList;
