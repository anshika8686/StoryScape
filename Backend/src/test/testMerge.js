const path = require("path");

const { mergeVideos } = require("../service/video.service");

async function testMerge() {

    const videos = [

        path.join(__dirname,
            "../../uploads/videos/test-story/Scene-1.mp4"),

        path.join(__dirname,
            "../../uploads/videos/test-story/Scene-2.mp4"),

        path.join(__dirname,
            "../../uploads/videos/test-story/Scene-3.mp4"),

        path.join(__dirname,
            "../../uploads/videos/test-story/Scene-4.mp4")

    ];

    const output = path.join(
        __dirname,
        "../../uploads/videos/test-story/story.mp4"
    );

    await mergeVideos(videos, output);

    console.log("Final Story Created!");
}

testMerge().catch(console.error);