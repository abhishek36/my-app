import Navigation from "../components/navigation";

export default function WithNavLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
