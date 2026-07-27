import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Clapperboard,
  WandSparkles,
} from "lucide-react";

const HeroIllustration = () => {
  return (
    <div className="relative flex h-[500px] items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

      {/* Floating Particles */}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-yellow-300"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: -40,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${15 + i * 8}%`,
            top: `${40 + (i % 3) * 15}%`,
          }}
        />
      ))}

      {/* Open Book */}

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="relative z-20 flex h-40 w-56 items-center justify-center rounded-3xl border border-yellow-300/20 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl"
      >
        <BookOpen
          size={90}
          className="text-yellow-300"
        />
      </motion.div>

      {/* Scene Card 1 */}

      <motion.div
        initial={{
          x: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
        className="absolute left-12 top-16 w-44 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
      >
        <Sparkles className="mb-3 text-yellow-300" />

        <p className="text-sm text-gray-300">
          Scene 01
        </p>

        <h3 className="mt-2 text-white">
          Enchanted Forest
        </h3>
      </motion.div>

      {/* Scene Card 2 */}

      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className="absolute right-8 top-40 w-44 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
      >
        <Clapperboard
          className="mb-3 text-yellow-300"
        />

        <p className="text-sm text-gray-300">
          Scene 02
        </p>

        <h3 className="mt-2 text-white">
          Castle Awakens
        </h3>
      </motion.div>

      {/* Scene Card 3 */}

      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-14 left-28 w-44 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
      >
        <WandSparkles
          className="mb-3 text-yellow-300"
        />

        <p className="text-sm text-gray-300">
          Scene 03
        </p>

        <h3 className="mt-2 text-white">
          Magic Begins
        </h3>
      </motion.div>
    </div>
  );
};

export default HeroIllustration;