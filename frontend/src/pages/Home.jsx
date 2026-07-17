import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Rooms />
      <Features />
      <DashboardPreview />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;