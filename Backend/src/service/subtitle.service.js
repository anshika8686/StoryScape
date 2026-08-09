const fs = require("fs-extra");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");

/**
 * Create an SRT subtitle file for a scene.
 *
 * @param {string} text
 * @param {string|number} storyId
 * @param {number} sceneNumber
 * @param {number} duration
 * @returns {Promise<string>} subtitle file path
 */
async function createSubtitle(
  text,
  storyId,
  sceneNumber,
  duration = 5
) {
  try {
    const subtitleDir = path.join(
      __dirname,
      "../../uploads/subtitles",
      storyId.toString()
    );

    await fs.ensureDir(subtitleDir);

    const subtitlePath = path.join(
      subtitleDir,
      `Scene-${sceneNumber}.srt`
    );

    // Convert seconds into SRT timestamp
    function formatTimestamp(seconds) {
      const hours = Math.floor(seconds / 3600);

      const minutes = Math.floor(
        (seconds % 3600) / 60
      );

      const secs = Math.floor(seconds % 60);

      const milliseconds = Math.floor(
        (seconds % 1) * 1000
      );

      return (
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(secs).padStart(2, "0")},` +
        `${String(milliseconds).padStart(3, "0")}`
      );
    }

    const startTime = formatTimestamp(0);
    const endTime = formatTimestamp(duration);

    const subtitleContent =
      `1\n` +
      `${startTime} --> ${endTime}\n` +
      `${text.trim()}\n`;

    await fs.writeFile(
      subtitlePath,
      subtitleContent,
      "utf8"
    );

    console.log(
      `Subtitle created: ${subtitlePath}`
    );

    return subtitlePath;

  } catch (error) {
    console.error(
      "Subtitle creation failed:",
      error.message
    );

    throw error;
  }
}

async function addSubtitleToVideo(
  videoPath,
  subtitlePath,
  storyId,
  sceneNumber
) {
  try {
    const videoDir = path.join(
      __dirname,
      "../../uploads/videos",
      storyId.toString()
    );

    await fs.ensureDir(videoDir);

    const outputPath = path.join(
      videoDir,
      `Scene-${sceneNumber}-subtitled.mp4`
    );

    // Convert Windows path for FFmpeg subtitle filter
    // C:\Users\... → C\:/Users/...
    const ffmpegSubtitlePath = subtitlePath
      .replace(/\\/g, "/")
      .replace(/^([A-Za-z]):/, "$1\\:");

    console.log(
      "Subtitle path for FFmpeg:",
      ffmpegSubtitlePath
    );

    // Subtitle styling
    const subtitleFilter =
      `subtitles='${ffmpegSubtitlePath}':` +
      `force_style='FontSize=14,` +
      `PrimaryColour=&H00FFFFFF,` +
      `Alignment=2,` +
      `MarginV=35'`;

    return new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .outputOptions([
          "-vf",
          subtitleFilter,
          "-c:a",
          "copy",
          "-c:v",
          "libx264",
          "-pix_fmt",
          "yuv420p",
          "-movflags",
          "+faststart",
        ])
        .on("start", (commandLine) => {
          console.log(
            "Subtitle FFmpeg command:"
          );
          console.log(commandLine);
        })
        .on("end", () => {
          console.log(
            `Subtitle added successfully: ${outputPath}`
          );

          resolve(outputPath);
        })
        .on("error", (err) => {
          console.error(
            "Subtitle addition failed:",
            err.message
          );

          reject(err);
        })
        .save(outputPath);
    });

  } catch (error) {
    console.error(
      "addSubtitleToVideo failed:",
      error.message
    );

    throw error;
  }
}

module.exports = {
  createSubtitle,
  addSubtitleToVideo
};