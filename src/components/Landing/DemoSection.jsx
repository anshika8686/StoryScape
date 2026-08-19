import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { CTAButtons } from "./CTAButtons";

function DemoSection() {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
            <PlayCircle size={18} />
            Watch AI in Action
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            See Your story
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Come Alive
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Upload a chapter from your favorite storybook and experience how
            StoryScape transforms plain text into animated scenes, cinematic
            visuals, AI narration, and immersive storytelling.
          </p>

          {/* Demo Video Placeholder */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto mt-16 flex h-[420px] max-w-5xl items-center justify-center rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
          >
            <div className="text-center">
              <PlayCircle
                size={80}
                className="mx-auto text-orange-400"
              />

              <p className="mt-6 text-xl font-semibold">
                Demo Coming Soon
              </p>
              
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <CTAButtons delay={0} />
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default DemoSection;