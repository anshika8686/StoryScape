import { motion } from "framer-motion";

const StoryVideo = ({ videoUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      <video
        src={videoUrl}
        controls
        playsInline
        className="aspect-video w-full rounded-2xl bg-black object-contain"
      />
    </motion.div>
  );
};

export default StoryVideo;