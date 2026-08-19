import { motion } from "framer-motion";
import { Upload, Sparkles, PlayCircle } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Story",
    description:
      "Upload your favorite story in PDF or text format and let StoryScape understand the story.",
  },
  {
    icon: Sparkles,
    title: "AI Generates Animation",
    description:
      "Our AI converts every scene into beautiful visuals, narration, and animated storytelling.",
  },
  {
    icon: PlayCircle,
    title: "Enjoy the Experience",
    description:
      "Watch your story come alive with cinematic animations, voice-over, and immersive storytelling.",
  },
];

function FeatureSection() {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-orange-400 uppercase tracking-[0.3em] font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Bring Stories
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              {" "}
              To Life
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            StoryScape transforms novels into immersive animated experiences
            using Artificial Intelligence, making reading engaging for everyone.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 cursor-pointer">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 shadow-lg shadow-orange-500/30">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeatureSection;