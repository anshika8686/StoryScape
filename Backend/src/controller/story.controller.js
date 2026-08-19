const storyModel = require("../models/storymodel");
const pdfService = require("../service/pdfservice");
const { processStory } = require("../service/processStory.service");
const { uploadVideo } = require("../service/cloudinary.service");

//TAKES THE STORY
//SENDS TO AI FOR PROCESSING
//RETURNS THE PROCESSED PART

async function generatestoryController(req, res) {
  console.log("Reached generateStoryController");

  let newStory;

  try {
    const { story } = req.body;

    if (!story || story.trim() === "") {
      return res.status(400).json({
        message: "Empty! Enter a valid story",
      });
    }

    const userId = req.user.id;

    // Create initial story document
    newStory = await storyModel.create({
      user: userId,
      title: "Untitled Story",
      originalStory: story,
      status: "processing",
    });

    console.log("Story document created:", newStory._id);

    // Run AI pipeline
    const { cleanedStory, scenes, characters, localVideoPath } = await processStory (
      story,
      newStory._id
    );

   const videoUrl = await uploadVideo(
  localVideoPath,
  newStory._id
);

console.log(videoUrl);
    // Update story with AI results
    await storyModel.findByIdAndUpdate(newStory._id, {
      cleanedStory,
      characters,
      scenes,
      finalVideoUrl:videoUrl,
      status: "successful",
    });

    console.log("Story processing completed.");

    return res.status(201).json({
      message: "Story processed successfully",
      storyId: newStory._id,
      finalVideoUrl: videoUrl
    });

  } catch (err) {
    console.error(err);

    // Mark story as failed if it was created
    if (newStory) {
      await storyModel.findByIdAndUpdate(newStory._id, {
        status: "failed",
      });
    }

    return res.status(500).json({
      message: err.message,
    });
  }
}


// TAKES THE PDF FILE
// SENDS TO PDFSERVICE FOR THE EXTRACTION OF TEXT
// SENDS TO GENERATESTORY FOR THE AI PROCESSING
async function uploadpdfController(req, res) {
  try {
    console.log("Reached uploadpdf controller");
    const file = req.file;

    console.log("File details:\n");
    console.log(req.file);
    if (!file) {
      return res.status(400).json({
        message: "Please upload a pdf",
      });
    }
    const text = await pdfService(file);
    req.body.story = text;
    return generatestoryController(req, res);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}
module.exports = {
  generatestoryController,
  uploadpdfController,
};
