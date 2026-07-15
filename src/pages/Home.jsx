import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <Stats />
    </>
  );
}

export default Home;