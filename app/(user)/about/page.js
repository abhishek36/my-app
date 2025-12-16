import Image from "next/image";
import Link from "next/link";
import image from "@/public/img.webp";

export const metadata = {
  title: "About Us - My Website",
  description:
    "Learn more about our company, mission, and the services we offer.",
  keywords: "about, services, company",
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      <button className="bg-sky-300 rounded-sm px-2 py-1 text-black">
        <Link href={"/"}>Home Page</Link>
      </button>
      {/* <div className=" w-55 h-55 relative border border-white rounded-sm overflow-hidden m-4">
        <Image
          src={image}
          alt="zenitsu"
          fill={true}
          placeholder="blur"
          blurDataURL={""}
          className=" object-cover"
        />
      </div> */}
    </>
  );
};

export default About;
