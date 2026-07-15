import DemoSection from "../components/Landing/DemoSection";
import FeatureSection from "../components/Landing/FeatureSection";
import Footer from "../components/Landing/Footer";
import Hero from "../components/Landing/Hero";


/**
 * LandingPage
 * ------------
 * The page is just a list of sections in order. If you need to reorder,
 * remove, or A/B test a section, this is the only file to touch —
 * nothing about layout or animation logic lives here.
 */
export default function LandingPage() {
  return (
    <main>
      <Hero/>
      <FeatureSection/>
      <DemoSection/>
      <Footer/>
    </main>
  );
}
