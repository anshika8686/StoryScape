import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ResultHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-yellow-300" />
        Story Complete
      </div>

      <h1
        className="text-5xl font-semibold text-white md:text-6xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Your story has come to life.
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-gray-400">
        Sit back and experience your story, transformed into a cinematic
        animation by StoryScape.
      </p>
    </motion.div>
  );
};

export default ResultHero;