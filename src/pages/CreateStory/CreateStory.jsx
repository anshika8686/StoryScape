import { useState } from "react";
import Navbar from "../../components/Common/Navbar";
import HeroSection from "../../components/CreateStory/HeroSection";
import StoryInput from "../../components/CreateStory/StoryInput";
import UploadSection from "../../components/CreateStory/UploadSection";
import GenerateButton from "../../components/CreateStory/GenerateButton";
import LoadingOverlay from "../../components/CreateStory/LoadingOverlay";


const CreateStory = () => {
  const [story, setStory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!story.trim() && !selectedFile) {
      alert("Please paste a story or upload a file first.");
      return;
    }

    try {
      setLoading(true);

      // Placeholder for now.
      // Later this will call your backend API.
      console.log("Story:", story);
      console.log("File:", selectedFile);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Generate failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar/>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-32 lg:px-8">
        <HeroSection/>

        <StoryInput story={story} setStory={setStory} />

        <UploadSection onFileSelect={setSelectedFile} />

        <GenerateButton onClick={handleGenerate} loading={loading} />
      </main>

      <LoadingOverlay loading={loading} />
    </div>
  );
};

export default CreateStory;