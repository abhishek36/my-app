import { Roboto } from "next/font/google";

const poppins = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function AboutLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}
