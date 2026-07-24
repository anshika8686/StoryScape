import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-storyscape.jpg";
import { HeroBackground } from "../Landing/HeroBackground";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-white/10"
    >
      <HeroBackground />
      <div className="relative z-10 grid min-h-[520px] lg:grid-cols-[45%_55%] items-center">
        {/* LEFT */}

        <div className="p-12">
          <p className="text-yellow-300 uppercase tracking-[0.3em] text-sm">
            Welcome Back
          </p>

          <h1
            className="mt-4 text-5xl font-semibold"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ready to bring another
            <span className="text-yellow-300 italic"> story </span>
            to life?
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
            Create cinematic scenes, animate characters and let AI transform
            your imagination into an immersive visual experience.
          </p>

          <Link
            to="/create-story"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            <Sparkles size={20} />
            Create New Story
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
