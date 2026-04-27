import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import Offerings from "./components/Offerings";
import Science from "./components/Science";
import HowItWorks from "./components/HowItWorks";
import Capture from "./components/Capture";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <Nav />
      <Hero />
      <BrandStatement />
      <Offerings />
      <HowItWorks />
      <Science />
      <Capture />
      <Footer />
    </div>
  );
}
