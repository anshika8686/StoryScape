const { ElevenLabsClient } = require("@elevenlabs/elevenlabs-js");
const fs = require("fs-extra");
const path = require("path");

//making client
const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

async function generateNarration(text, storyId, sceneNumber) {
    try {
        //output path
        const outputDir = path.join(
            __dirname,
            "../../uploads/audio",
            storyId.toString()
        );

        await fs.ensureDir(outputDir);

        const outputPath = path.join(
            outputDir,
            `Scene-${sceneNumber}.mp3`
        );

        // Don't generate again if already present
        if (await fs.pathExists(outputPath)) {
            console.log(`Audio already exists: Scene ${sceneNumber}`);
            return outputPath;
        }

        console.log(`Generating narration for Scene ${sceneNumber}...`);

        const audio = await elevenlabs.textToSpeech.convert(
            process.env.ELEVENLABS_VOICE_ID,
            {
                text,
                modelId: "eleven_multilingual_v2",
                outputFormat: "mp3_44100_128",
            }
        );

        // SDK returns audio as a stream
        const chunks = [];

        for await (const chunk of audio) {
            chunks.push(chunk);
        }

        const audioBuffer = Buffer.concat(chunks);

        await fs.writeFile(outputPath, audioBuffer);

        console.log(`Narration saved: ${outputPath}`);

        return outputPath;

    } catch (error) {
        console.error("Narration generation failed:");

        if (error.response?.data) {
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }

        throw error;
    }
}

module.exports = {
    generateNarration
};