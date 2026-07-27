import { motion } from "framer-motion";
import HeroIllustration from "./HeroIlustration";



const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="grid items-center gap-10 px-6 py-10 lg:px-14 lg:py-14">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
            StoryScape
          </p>

          <h1
            className="mt-5 text-4xl font-semibold leading-tight text-white lg:text-6xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Transform Stories Into
            <span className="block italic text-yellow-300">
              Living Worlds
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 lg:text-lg">
            Paste a written story or upload a file, and StoryScape will turn it
            into a cinematic animated experience for readers who prefer watching
            stories come alive.
          </p>
        </div>

        <HeroIllustration />
      </div>
    </motion.section>
  );
};

export default HeroSection;