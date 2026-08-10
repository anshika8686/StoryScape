
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
      >

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Why StoryScape?
        </p>

        {/* Heading */}
        <h2
          className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          We don't want to replace reading.
          <br />
          <span className="text-yellow-300">
            We want to inspire it.
          </span>
        </h2>

        {/* Content */}
        <div className="mt-8 space-y-5 text-base leading-8 text-gray-300 md:text-lg">
          <p>
            In a world filled with short videos, endless scrolling, and
            constant digital distractions, sitting down with a book can
            sometimes feel like a difficult choice.
          </p>

          <p>
            Many incredible stories remain unread simply because people
            struggle to connect with the traditional way of experiencing them.
          </p>

          <p>
            StoryScape uses AI to transform those stories into cinematic
            visual experiences — helping people see the characters, imagine
            the world, hear the narration, and experience the emotions hidden
            within the story.
          </p>

          <p className="text-white">
            And hopefully, that experience creates one simple feeling:
          </p>

          <p
            className="text-xl text-yellow-300"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            “I want to read the whole story.”
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default VisionMission;

