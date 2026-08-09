const path = require("path");

const { mergeVideos } = require("../service/video.service");

async function testMerge() {
  try {
    const storyId = "test-story";

    const videos = [
      path.join(
        __dirname,
        "../../uploads/videos/test-story/Scene-1-final.mp4"
      ),

      path.join(
        __dirname,
        "../../uploads/videos/test-story/Scene-2.mp4"
      ),

      path.join(
        __dirname,
        "../../uploads/videos/test-story/Scene-3.mp4"
      ),

      path.join(
        __dirname,
        "../../uploads/videos/test-story/Scene-4.mp4"
      ),
    ];

    console.log("Input videos:");

    videos.forEach((video) => {
      console.log(video);
    });

    const output = await mergeVideos(
      videos,
      storyId
    );

    console.log("================================");
    console.log("Final Story Created!");
    console.log(`Output: ${output}`);
    console.log("================================");

  } catch (error) {
    console.error("Merge test failed:", error);
  }
}

testMerge();