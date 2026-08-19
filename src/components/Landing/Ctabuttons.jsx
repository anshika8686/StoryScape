import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth.use";

export function CTAButtons({
  label = "Create Your Story",
  delay = 0.75,
}) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCreateStory = () => {
    if (user) {
      navigate("/create-story");
    } else {
      navigate("/login");
    }
  };

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
      <button
        type="button"
        onClick={handleCreateStory}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-7 py-4 text-sm font-semibold text-black shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-400/30"
      >
        {label}

        <ArrowRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Secondary Button */}
      <a
        href="#demo"
        className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-orange-400 hover:bg-white/10"
      >
        Watch Demo
      </a>
    </motion.div>
  );
}