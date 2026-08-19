import { useStory } from "../../hooks/story.use";
import { useNavigate } from "react-router";

import Navbar from "../../components/Common/Navbar";
import ResultHero from "../../components/CreateResult/ResultHero";
import StoryVideo from "../../components/CreateResult/StoryVideo";
import ResultActions from "../../components/CreateResult/ResultActions";


const StoryResult = () => {
  const { storyResult } = useStory();
  const navigate = useNavigate();

  if (!storyResult) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <Navbar />

        <main className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              No story found
            </h2>

            <p className="mt-3 text-gray-400">
              Create a story first to see your animation.
            </p>

            <button
              onClick={() => navigate("/create-story")}
              className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
            >
              Create Story
            </button>
          </div>
        </main>
      </div>
    );
  }

  const videoUrl = storyResult.finalVideoUrl;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-32">

        <ResultHero />

        <StoryVideo videoUrl={videoUrl} />

        <ResultActions />

      </main>
    </div>
  );
};

export default StoryResult;