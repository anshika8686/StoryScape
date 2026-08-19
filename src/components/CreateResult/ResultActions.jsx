import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

const ResultActions = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-8 text-center"
    >
      <p className="text-sm text-gray-500">
        Created with StoryScape AI
      </p>

      <button
        onClick={() => navigate("/create-story")}
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-400/30"
      >
        <Plus className="h-5 w-5" />
        Create Another Story
      </button>
    </motion.div>
  );
};

export default ResultActions;