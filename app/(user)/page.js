"use client";

import { useEffect, useState } from "react";
import Counter from "../components/Counter";
const URL = "https://jsonplaceholder.typicode.com/posts";

const Page = () => {
  const [postData, setPostData] = useState([]);
  console.log(postData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPostData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className=" font-roboto font-bold text-5xl">
        Welcome to the Home Page
      </h1>
      <Counter />
      {postData.slice(0, 10).map((data) => (
        <li>{data.title}</li>
      ))}
    </>
  );
};

export default Page;
