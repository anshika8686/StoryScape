const mongoose = require("mongoose");
const userModel = require("./usermodel");
const storySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      default: "Untitled Story",
    },
    originalStory: {
      type: String,
      default: "",
    },
    cleanedStory: {
      type: String,
      default: "",
    },
    scenes: [
      {
        sceneNumber: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        characters: {
          type: [String],
          default: [],
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      enum: ["processing", "successful", "failed"],
      default: "processing",
    },
  },
  { timestamps: true },
);
const storyModel = mongoose.model("Story", storySchema);
module.exports = storyModel;
