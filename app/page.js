import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Clicks photography"
        message="Capturing moments, creating memories, one click at a time."
      />
    </div>
  );
}
