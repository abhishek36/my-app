"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/public/img.webp";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <button className="bg-sky-300 rounded-sm px-2 py-1 text-black">
        <Link href={"/"}>Home Page</Link>
      </button>
      <div className=" w-55 h-55 relative border border-white rounded-sm overflow-hidden m-4">
        <Image
          src={image}
          alt="zenitsu"
          fill={true}
          placeholder="blur"
          blurDataURL={""}
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default About;
