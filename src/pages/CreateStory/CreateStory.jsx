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
 


  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar/>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-32 lg:px-8">
        <HeroSection/>

        <StoryInput story={story} setStory={setStory} />

        <UploadSection onFileSelect={setSelectedFile}  />

        <GenerateButton story={story} selectedFile={selectedFile}/>
      </main>

      <LoadingOverlay />
    </div>
  );
};

export default CreateStory;