const mongoose=require('mongoose')
const userModel = require('./usermodel')
const storySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    title:{
        type: String,
        required:true
    },
    originalStory:{
        type:String,
        default:""
    },
    status:{
        type:String,
        enum:["processing","successful","failed"],
        default:"processing"
   }},{timestamps:true}
)
const storyModel=mongoose.model('Story',storySchema)
module.exports=storyModel