import StoryCard from "./StoryCard";


const stories = [
  {
    title: "The Lost Kingdom",
    genre: "Fantasy",
  },
  {
    title: "Whispers of the Forest",
    genre: "Mystery",
  },
  {
    title: "The Last Dragon",
    genre: "Adventure",
  },
];

const RecentStories = () => {
  return (
    <section className="mt-14">

      <div className="flex items-center justify-between">

        <h2
          className="text-4xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Recent Stories
        </h2>

      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}

      </div>

    </section>
  );
};

export default RecentStories;