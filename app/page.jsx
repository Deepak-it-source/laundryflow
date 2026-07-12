import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/Nav";
import CinematicSequence from "../components/CinematicSequence";
import Features from "../components/Features";
import Analytics from "../components/Analytics";
import WhatsAppAutomation from "../components/WhatsAppAutomation";
import Billing from "../components/Billing";
import Reports from "../components/Reports";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Nav />
        <CinematicSequence />
        <Features />
        <Analytics />
        <WhatsAppAutomation />
        <Billing />
        <Reports />
        <FinalCta />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
