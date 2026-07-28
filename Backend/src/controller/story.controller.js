const storyModel = require("../models/storymodel")
const pdfService = require("../service/pdfservice")

async function generatestoryController(req,res){
try{
    const {story}=req.body
if(!story){
    return res.status(400).json({
        message:"Empty! Enter a valid story"
    })
}
const userId=req.user.id
const newStory=await storyModel.create({
    user:userId,
    title:"Untitled Story",
    originalStory:story
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
    return res.status(200).json({
        message:"Text extracted successfully",
        text
    })
}
catch(err){
    console.error(err);

        return res.status(500).json({
            message: err.message
        })
    }
 console.log("Controller reached");
    console.log(req.file);

    return res.status(200).json({
        message: "Upload successful"
    });
}
module.exports={
    generatestoryController,
    uploadpdfController
}
