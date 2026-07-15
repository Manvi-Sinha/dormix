import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Rooms from "../components/Rooms";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Rooms />
    </>
  );
}

export default Home;