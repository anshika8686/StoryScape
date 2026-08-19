const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadVideo = async (videoPath, storyId) => {
  try {
    const result = await cloudinary.uploader.upload(videoPath, {
      resource_type: "video",
      folder: `storyscape/videos/${storyId}`,
      public_id: "final-story",
       overwrite: true,
    });

    console.log("Cloudinary upload successful:");
    console.log(result.secure_url);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);
    throw error;
  }
};

module.exports = {
  uploadVideo,
};