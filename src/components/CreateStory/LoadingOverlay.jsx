import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

const LoadingOverlay = ({ loading = false, title = "Generating your animated story..." }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-6 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10">
          <Loader2 className="h-8 w-8 animate-spin text-yellow-300" />
        </div>

        <h3
          className="mt-6 text-2xl font-semibold text-white"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          StoryScape is reading your story, breaking it into cinematic scenes,
          and preparing the animation.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-gray-300">
          <Sparkles className="h-4 w-4 text-yellow-300" />
           Please wait
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-orange-400"
            initial={{ width: "10%" }}
            animate={{ width: ["10%", "70%", "40%", "90%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingOverlay;