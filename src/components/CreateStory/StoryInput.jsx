import { useMemo } from "react";
import { BookText, Sparkles } from "lucide-react";

const countWords = (text) => {
  const words = text.trim().match(/\S+/g);
  return words ? words.length : 0;
};

const estimateScenes = (wordCount) => {
  if (wordCount === 0) return "--";
  if (wordCount <= 150) return "2–3";
  if (wordCount <= 300) return "3–4";
  if (wordCount <= 600) return "5–7";
  if (wordCount <= 1000) return "8–10";
  return "10+";
};

const StoryInput = ({ story, setStory }) => {
  const wordCount = countWords(story);
  const sceneCount = estimateScenes(wordCount)

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <BookText className="h-5 w-5 text-yellow-300" />
            <h2
              className="text-2xl font-semibold text-white lg:text-3xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Paste Your Story
            </h2>
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300 lg:text-base">
            Paste your story below. The more detailed the text, the better the
            cinematic experience.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-gray-300">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          Supports: PDF, TXT
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Once upon a time in a far away land..."
          rows={10}
          className="min-h-[220px] w-full resize-none rounded-2xl border border-white/10 bg-[#08111f] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-300/50 focus:ring-2 focus:ring-yellow-300/20 lg:text-base"
        />

        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-300">
            <span className="text-white">Words:</span> {wordCount}
          </p>

          <p className="text-sm text-gray-300">
            <span className="text-white">Estimated Scenes:</span> {sceneCount}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default StoryInput;