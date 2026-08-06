require("dotenv").config();
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const FormData = require("form-data");

const STABILITY_API_KEY = process.env.STABILITY_API_KEY;

if (!STABILITY_API_KEY) {
    throw new Error("STABILITY_API_KEY not found in .env");
}

const URL =
  "https://api.stability.ai/v2beta/stable-image/generate/core";

async function generateImage(imagePrompt, storyId, sceneNumber) {
  try {
    // Folder: uploads/images/<storyId>/
    const outputDir = path.join(
      __dirname,
      "../../uploads/images",
      storyId.toString()
    );

    await fs.ensureDir(outputDir);

    // File: scene-1.png
    const imagePath = path.join(
      outputDir,
      `scene-${sceneNumber}.png`
    );

    // Don't regenerate if image already exists
    if (await fs.pathExists(imagePath)) {
      console.log(`Image already exists: Scene ${sceneNumber}`);
      return imagePath;
    }

    // Request payload
    const payload = {
      prompt: imagePrompt,
      aspect_ratio: "16:9",
      output_format: "png",
    };

    // Send request to Stability AI
    const response = await axios.postForm(
      URL,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${STABILITY_API_KEY}`,
          Accept: "image/*",
        },
      }
    );

    // Handle API errors
    if (response.status !== 200) {
      throw new Error(
        `${response.status}: ${Buffer.from(response.data).toString()}`
      );
    }

    // Save image
    await fs.writeFile(imagePath, Buffer.from(response.data));

    console.log("Image generated successfully");
console.log(`Saved to: ${imagePath}`);

    return imagePath;
  } catch (err) {
    console.error("Image generation failed:", err.message);
    throw err;
  }
}
module.exports={
    generateImage
}