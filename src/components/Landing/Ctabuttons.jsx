import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTAButtons({
  href = "#create",
  label = "Create Your Story",
  delay = 0.75,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
      className="mt-10 flex flex-wrap gap-4"
    >
      {/* Primary Button */}
      <a
        href={href}
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500/50"
      >
        {label}

        <ArrowRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* Secondary Button */}
      <a
        href="#demo"
        className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-orange-400"
      >
        Watch Demo
      </a>
    </motion.div>
  );
}