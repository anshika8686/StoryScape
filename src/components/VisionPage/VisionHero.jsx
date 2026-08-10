
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const VisionHero = () => {
  return (
    <section className="px-6 pb-20 pt-40">
      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-sm text-purple-200 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          Our Vision
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Bringing the magic of{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            stories
          </span>{" "}
          closer to everyone.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          We believe that every story deserves to be experienced. Yet, for
          many people, reading a long book can feel difficult, overwhelming,
          or simply uninteresting.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500"
        >
          StoryScape is our attempt to make those stories easier to discover.
        </motion.p>

      </div>
    </section>
  );
};

export default VisionHero;

