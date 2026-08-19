import { createContext, useState } from "react";
import { generatestory, uploadPdf } from "../services/story.api";

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const [loading, setloading] = useState(false);

  // Restore saved result when provider is created
  const [storyResult, setStoryResult] = useState(() => {
    const savedResult = sessionStorage.getItem("storyResult");

    if (savedResult) {
      try {
        return JSON.parse(savedResult);
      } catch (error) {
        console.error("Failed to restore story result:", error);
        sessionStorage.removeItem("storyResult");
      }
    }

    return null;
  });

  // Save result both in React state and sessionStorage
  const saveStoryResult = (data) => {
    setStoryResult(data);

    sessionStorage.setItem(
      "storyResult",
      JSON.stringify(data)
    );
  };

  const handlegenerateStory = async (story) => {
    try {
      setloading(true);

      const data = await generatestory(story);

      console.log("response from handlegenerate story");
      console.log(data);

      saveStoryResult(data);

      return data;

    } catch (err) {
      console.log(err.message);
      throw err;

    } finally {
      setloading(false);
    }
  };

  const handleuploadPdf = async (file) => {
    if (!file) return;

    try {
      setloading(true);

      const data = await uploadPdf(file);

      console.log("response from handle upload pdf");
      console.log(data);

      saveStoryResult(data);

      return data;

    } catch (err) {
      console.log(err.message);
      throw err;

    } finally {
      setloading(false);
    }
  };

  return (
    <StoryContext.Provider
      value={{
        loading,
        storyResult,
        handlegenerateStory,
        handleuploadPdf,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};