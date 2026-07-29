console.log("StoryRoutes loaded")
const express=require('express')
const identifyUser = require('../middleware/auth.middleware')
const storyController=require("../controller/story.controller")
const upload=require("../config/multer")
const {testGemini, listModels} = require('../service/scene.service')

 const storyRouter=express.Router()

storyRouter.post("/generate-story",identifyUser,storyController.generatestoryController)
storyRouter.post("/upload-pdf",identifyUser,upload.single("pdf"),storyController.uploadpdfController)
storyRouter.get("/test-gemini", async (req, res) => {
    const result = await testGemini();

    res.json({
        message: "Gemini Connected!",
        result
    });
});

module.exports=storyRouter