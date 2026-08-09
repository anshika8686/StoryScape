require("dotenv").config();
const path = require("path");

const {
  mergeVideoWithAudio,
} = require("../service/video.service");

async function testMerge() {
  try 
    {
    const videoPath = path.join(
      __dirname,
      "../../uploads/videos/test-story/Scene-1.mp4"
    );

    const audioPath = path.join(
      __dirname,
      "../../uploads/audio/test-story/Scene-1.mp3"
    );

    const outputPath = path.join(
      __dirname,
      "../../uploads/videos/test-story/Scene-1-final.mp4"
    );

    console.log("Starting merge...");
    console.log("Video:", videoPath);
    console.log("Audio:", audioPath);
    console.log("Output:", outputPath);

    await mergeVideoWithAudio(
      videoPath,
      audioPath,
      outputPath
    );

    console.log("================================");
    console.log("MERGE TEST SUCCESSFUL");
    console.log("Final file:", outputPath);
    console.log("================================");

  } catch (error) {
    console.error("================================");
    console.error("MERGE TEST FAILED");
    console.error(error);
    console.error("================================");
  }
}

testMerge();