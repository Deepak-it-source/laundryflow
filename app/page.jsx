import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/Nav";
import CinematicSequence from "../components/CinematicSequence";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Billing from "../components/Billing";
import Reports from "../components/Reports";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Nav />
        <CinematicSequence />
        <About />
        <Services />
        <Features />
        <Billing />
        <Reports />
        <Testimonials />
        <Contact />
        <FinalCta />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
