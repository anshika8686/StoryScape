
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import VisionHero from "../../components/VisionPage/VisionHero";
import VisionQuote from "../../components/VisionPage/VisionQuote";
import VisionMission from "../../components/VisionPage/VisionMission";


const OurVision = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <main>

        {/* Hero */}
        <VisionHero />

        {/* Central Quote */}
        <VisionQuote />

        {/* Why StoryScape */}
        <VisionMission />

      </main>

      <Footer />

    </div>
  );
};

export default OurVision;

