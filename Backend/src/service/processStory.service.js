const { cleanStory, generateScenes } = require("../service/scene.service");
const { generateCharacterSheet } = require("../service/character.service");
const {
  generateImagePrompts,
  generateImage,
} = require("../service/image.service");
const {
  createSceneVideo,
  mergeVideoWithAudio,
  mergeVideos,
} = require("../service/video.service");
const { generateNarration } = require("../service/audio.service");

const path = require("path");
const fs = require("fs-extra");

async function processStory(story, storyId) {
  console.log("=================================");
  console.log("Starting StoryScape pipeline...");
  console.log("=================================");

  // ==========================================
  // 1. CLEAN STORY
  // ==========================================

  console.log("Cleaning story...");
  const cleanedStory = await cleanStory(story);
  console.log("Cleaned story completed.");

  // ==========================================
  // 2. GENERATE SCENES
  // ==========================================

  console.log("Generating scenes...");
  const scenes = await generateScenes(cleanedStory);
  console.log(`Generated ${scenes.length} scenes.`);

  // ==========================================
  // 3. GENERATE CHARACTER SHEET
  // ==========================================

  console.log("Generating characters...");
  const characters = await generateCharacterSheet(cleanedStory, scenes);
  console.log("Character generation completed.");

  // ==========================================
  // 4. GENERATE IMAGE PROMPTS + EFFECTS
  // ==========================================
  console.log("Generating image prompts and cinematic effects...");
  const imagePrompts = await generateImagePrompts(scenes, characters);
  console.log("Image prompts generated.");

  // ==========================================
  // 5. ATTACH IMAGE PROMPT + EFFECT TO SCENES
  // ==========================================

  const updatedScenes = scenes.map((scene) => {
    const matchingPrompt = imagePrompts.find(
      (prompt) => prompt.sceneNumber === scene.sceneNumber,
    );
    return {
      ...scene,
      imagePrompt: matchingPrompt?.imagePrompt || "",
      effect: matchingPrompt?.effect || "zoomIn",
    };
  });

  // ==========================================
  // 6. PROCESS EACH SCENE
  // ==========================================

  const processedScenes = [];
  const finalScenePaths = [];

  for (const scene of updatedScenes) {
    console.log(`\n========== Scene ${scene.sceneNumber} ==========`);

    // ------------------------------------------
    // IMAGE
    // ------------------------------------------

    console.log("Generating image...");
    const imagePath = await generateImage(
      scene.imagePrompt,
      storyId,
      scene.sceneNumber,
    );
    console.log(`Image generated: ${imagePath}`);

    // ------------------------------------------
    // SCENE VIDEO
    // ------------------------------------------

    console.log(`Applying cinematic effect: ${scene.effect}`);

    const videoPath = await createSceneVideo(
      imagePath,
      storyId,
      scene.sceneNumber,
      scene.effect,
    );

    console.log(`Scene video created: ${videoPath}`);

    // ------------------------------------------
    // NARRATION
    // ------------------------------------------

    console.log("Generating narration...");
    const audioPath = await generateNarration(
      scene.description,
      storyId,
      scene.sceneNumber,
    );
    console.log(`Narration created: ${audioPath}`);

    // ------------------------------------------
    // VIDEO + AUDIO
    // ------------------------------------------

    console.log("Combining video and narration...");

    const finalScenePath = await mergeVideoWithAudio(
      videoPath,
      audioPath,
      storyId,
      scene.sceneNumber,
    );

    console.log(`Final scene created: ${finalScenePath}`);
    finalScenePaths.push(finalScenePath);

    // ------------------------------------------
    // STORE PROCESSED SCENE
    // ------------------------------------------

    processedScenes.push({
      ...scene,
      imageUrl: imagePath,
      videoUrl: videoPath,
      audioUrl: audioPath,
    });
    console.log(`Scene ${scene.sceneNumber} completed.`);
  }
  // ==========================================
  // 7. MERGE ALL FINAL SCENES
  // ==========================================

  console.log("\nMerging all scene videos...");

  const finalVideoPath = await mergeVideos(finalScenePaths, storyId);

  console.log(`Final story video created: ${finalVideoPath}`);

  // ==========================================
  // 8. RETURN EVERYTHING
  // ==========================================

  console.log("\n=================================");
  console.log("StoryScape pipeline completed.");
  console.log("=================================");

  return {
    cleanedStory,
    scenes: processedScenes,
    characters,
    finalVideoUrl: finalVideoPath,
  };
}

module.exports = {
  processStory,
};
