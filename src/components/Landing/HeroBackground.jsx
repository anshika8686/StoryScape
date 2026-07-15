import { motion } from "framer-motion";
import heroImage from "../../assets/hero-storyscape.jpg";

export function HeroBackground() {
  return (

    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}

      <motion.img
        src={heroImage}
        alt="StoryScape Background"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue/50" />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/100 via-slate-950/300 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}