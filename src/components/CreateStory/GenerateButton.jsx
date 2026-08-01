import { Sparkles } from "lucide-react";
import { useStory } from "../../hooks/story.use";

const GenerateButton = ({story, selectedFile,disabled = false }) => {
  const {loading,handlegenerateStory,handleuploadPdf}=useStory()

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-8">
      <button
        type="button"
        onClick={async () => {
        if (selectedFile) {
        await handleuploadPdf(selectedFile);
    } else {
        await handlegenerateStory(story);
    }
}}
        disabled={loading || disabled}
        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-4 text-lg font-medium text-black shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-yellow-400/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Sparkles className="h-5 w-5" />
        {loading ? "Generating..." : "Generate Animated Story"}
      </button>

      <p className="mt-4 text-center text-sm text-gray-400">
        Your story is private and secured.
      </p>
    </section>
  );
};

export default GenerateButton;