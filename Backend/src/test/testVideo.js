const { createSceneVideo } = require("../service/video.service");

async function test() {
    await createSceneVideo(
        "uploads/images/test-story/Scene-1.png",
        "uploads/videos/test-story/Scene-1.mp4"
    );

    console.log("Done");
}

test();