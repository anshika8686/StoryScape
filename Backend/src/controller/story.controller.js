const storyModel = require("../models/storymodel")
const pdfService = require("../service/pdfservice")
const {processStory}=require("../service/scene.service")

//TAKES THE STORY
//SENDS TO AI FOR PROCESSING 
//RETURNS THE PROCESSED PART
async function generatestoryController(req,res){
    console.log("Reached generateStoryController");
try{
    const {story}=req.body
if(!story || story.trim() === ""){
    return res.status(400).json({
        message:"Empty! Enter a valid story"
    })
}

const { cleanedStory, scenes, charactersheet} = await processStory(story);
const userId=req.user.id
const newStory=await storyModel.create({
    user:userId,
    title:"Untitled Story",
    originalStory:story,
    cleanedStory:cleanedStory,
    scenes:scenes,
    characters:charactersheet,
    status:"successful"
})

return res.status(201).json({
    message:"Story saved successfully",
    storyId:newStory._id
})
}
catch(err){
    return res.status(500).json({
            message: err.message
        });
}
}

// TAKES THE PDF FILE
// SENDS TO PDFSERVICE FOR THE EXTRACTION OF TEXT
// SENDS TO GENERATESTORY FOR THE AI PROCESSING
async function uploadpdfController(req,res){
    try{
    console.log("Reached uploadpdf controller")
    const file=req.file

    console.log("File details:\n")
    console.log(req.file);
    if(!file){
        return res.status(400).json({
            message:"Please upload a pdf"
        })
    }
    const text=await pdfService(file);
    req.body.story=text;
    return generatestoryController(req,res)
}
catch(err){
    console.error(err);

        return res.status(500).json({
            message: err.message
        })
    }
}
module.exports={
    generatestoryController,
    uploadpdfController
}
