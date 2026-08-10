
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const VisionQuote = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >

        {/* Decorative Icon */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <Sparkles className="h-5 w-5 text-yellow-300" />
        </div>

        {/* Quote */}
        <blockquote
          className="mt-8 text-3xl font-medium leading-relaxed text-white md:text-5xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          “Sometimes, all it takes to open a book to have a glimpse of the world
          waiting inside.”
        </blockquote>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-16 bg-white/20" />

        {/* Attribution */}
        <p className="mt-5 text-xs tracking-[0.3em] text-gray-500">
          — STORYSCAPE
        </p>

        {/* Thought */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          We believe visualization can be the first step toward imagination,
          and imagination can lead us back to the pages of a book.
        </p>

      </motion.div>
    </section>
  );
};

export default VisionQuote;

