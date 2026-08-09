require("dotenv").config();

const { generateNarration } = require("../service/audio.service");

async function test() {
    try {
        const audioPath = await generateNarration(
            "The lighthouse stood quietly beside the sea.",
            "test-story",
            1
        );

        console.log("Audio created:", audioPath);

    } catch (error) {
        console.error("Test failed:", error.message);
    }
}

test();