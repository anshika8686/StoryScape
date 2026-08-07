const path = require("path");
const { createSceneVideo } = require("../service/video.service");

const scenes = [
    {
        image: path.join(__dirname, "../../uploads/images/test-story/Scene-1.png"),
        output: path.join(__dirname, "../../uploads/videos/test-story/Scene-1.mp4"),
        effect: "zoomIn",
    },
    {
        image: path.join(__dirname, "../../uploads/images/test-story/Scene-2.png"),
        output: path.join(__dirname, "../../uploads/videos/test-story/Scene-2.mp4"),
        effect: "panLeft",
    },
    {
        image: path.join(__dirname, "../../uploads/images/test-story/Scene-3.png"),
        output: path.join(__dirname, "../../uploads/videos/test-story/Scene-3.mp4"),
        effect: "zoomOut",
    },
    {
        image: path.join(__dirname, "../../uploads/images/test-story/Scene-4.png"),
        output: path.join(__dirname, "../../uploads/videos/test-story/Scene-4.mp4"),
        effect: "panRight",
    },
];

async function main() {
    for (const scene of scenes) {
        console.log(`Generating Scene ${scene.effect}...`);

        await createSceneVideo(
            scene.image,
            scene.output,
            scene.effect
        );

        console.log("Done");
    }

    console.log("\n🎉 All scene videos generated successfully!");
}

main().catch(console.error);