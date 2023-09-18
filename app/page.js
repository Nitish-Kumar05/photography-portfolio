import Hero from "./components/Hero";
import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Clicks photography"
        message="Capturing moments, creating memories, one click at a time."
      />
      <Slider slides={SliderData} />
      <Instagram />
      <Work />
      <Contact />
    </div>
  );
}
