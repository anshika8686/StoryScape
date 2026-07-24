import { ArrowRight } from "lucide-react";

const StoryCard = ({ story }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-300">

      <img
        src="/images/story-placeholder.jpg"
        alt=""
        className="h-52 w-full rounded-2xl object-cover"
      />

      <h3
        className="mt-5 text-3xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {story.title}
      </h3>

      <span className="mt-2 inline-block rounded-full bg-yellow-300/20 px-4 py-1 text-sm text-yellow-300">
        {story.genre}
      </span>

      <button
        className="mt-6 flex items-center gap-2 text-yellow-300"
      >
        Continue

        <ArrowRight size={18} />
      </button>

    </div>
  );
};

export default StoryCard;