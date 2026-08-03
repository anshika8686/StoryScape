const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    species: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      default: "",
    },

    characterSheet: {
  visualDescription: {
    type: String,
    default: "",
  },
},

    age: {
      type: String,
      default: "",
    },

    appearance: {
      type: String,
      default: "",
    },

    clothing: {
      type: String,
      default: "",
    },

    personality: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

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

    characters: {
      type: [characterSchema],
      default: [],
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
