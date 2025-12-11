import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        backgroundColor: "blue",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/service">Service</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
