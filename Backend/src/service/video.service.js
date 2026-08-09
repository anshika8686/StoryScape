const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs-extra");

function getVideoFilter(effect) {
  const totalFrames = 150; // 5s @ 30fps
  const outW = 1344, outH = 768;
  const upscaleW = 8000; // large upscale to avoid rounding jitter

  const pre = `fps=30,scale=${upscaleW}:-1,`;
  const post = `,scale=${outW}:${outH}:flags=lanczos,format=yuv420p`;

  switch (effect) {
    case "zoomIn":
      return (
        pre +
        "zoompan=" +
        `z='min(zoom+0.0015,1.15)':` +
        "x='(iw-iw/zoom)/2':" +
        "y='(ih-ih/zoom)/2':" +
        `d=${totalFrames}:` +
        `s=${outW}x${outH}:` +
        "fps=30" +
        post
      );

    case "zoomOut":
      return (
        pre +
        "zoompan=" +
        `z='if(eq(on,0),1.15,max(zoom-0.0015,1.0))':` +
        "x='(iw-iw/zoom)/2':" +
        "y='(ih-ih/zoom)/2':" +
        `d=${totalFrames}:` +
        `s=${outW}x${outH}:` +
        "fps=30" +
        post
      );

    case "panLeft":
      return (
        pre +
        "zoompan=" +
        "z='1.08':" +
        `x='(iw-iw/zoom)*(1-on/${totalFrames})':` +
        "y='(ih-ih/zoom)/2':" +
        `d=${totalFrames}:` +
        `s=${outW}x${outH}:` +
        "fps=30" +
        post
      );

    case "panRight":
      return (
        pre +
        "zoompan=" +
        "z='1.08':" +
        `x='(iw-iw/zoom)*(on/${totalFrames})':` +
        "y='(ih-ih/zoom)/2':" +
        `d=${totalFrames}:` +
        `s=${outW}x${outH}:` +
        "fps=30" +
        post
      );

    default:
      return (
        pre +
        "zoompan=" +
        `z='min(zoom+0.0015,1.15)':` +
        "x='(iw-iw/zoom)/2':" +
        "y='(ih-ih/zoom)/2':" +
        `d=${totalFrames}:` +
        `s=${outW}x${outH}:` +
        "fps=30" +
        post
      );
  }
}

async function createSceneVideo(imagePath, storyId, effect, sceneNumber) {
  const videoDir = path.join(
    __dirname,
    "../../uploads/videos",
    storyId.toString(),
  );

  await fs.ensureDir(videoDir);

  const outputPath = path.join(videoDir, `Scene-${sceneNumber}.mp4`);

  return new Promise((resolve, reject) => {
    const filter = getVideoFilter(effect);

    ffmpeg(imagePath)
      .inputOptions("-loop 1")
      .duration(5)
      .fps(30)
      .videoFilters(filter)
      .videoCodec("libx264")
      .outputOptions("-pix_fmt yuv420p")
      .on("end", () => {
        console.log(`Scene video created: ${outputPath}`);
        resolve(outputPath);
      })
      .on("error", (err) => {
        console.error("Scene video creation failed:", err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

async function mergeVideoWithAudio(videoPath, audioPath, storyId, sceneNumber) {
  try {
    const finalSceneDir = path.join(
      __dirname,
      "../../uploads/videos",
      storyId.toString(),
    );

    await fs.ensureDir(finalSceneDir);

    const outputPath = path.join(
      finalSceneDir,
      `Scene-${sceneNumber}-final.mp4`,
    );

    return new Promise((resolve, reject) => {
      ffmpeg()
        .input(videoPath)
        .input(audioPath)
        .outputOptions([
          "-map 0:v:0",
          "-map 1:a:0",
          "-c:v copy",
          "-c:a aac",
          "-movflags +faststart",
        ])
        .on("start", (commandLine) => {
          console.log("FFmpeg command:", commandLine);
        })
        .on("end", () => {
          console.log(`Video + audio merged successfully: ${outputPath}`);
          resolve(outputPath);
        })
        .on("error", (err) => {
          console.error("Video + audio merge failed:", err.message);
          reject(err);
        })
        .save(outputPath);
    });
  } catch (err) {
    console.error("mergeVideoWithAudio failed:", err.message);
    throw err;
  }
}

async function mergeVideos(videoPaths, storyId) {
  try {
    const finalVideoDir = path.join(
      __dirname,
      "../../uploads/videos",
      storyId.toString()
    );

    await fs.ensureDir(finalVideoDir);

    const outputPath = path.join(
      finalVideoDir,
      "final-story.mp4"
    );

    // Create temporary file list
    const fileListPath = path.join(
      finalVideoDir,
      "videos.txt"
    );

    const fileContent = videoPaths
      .map((video) => `file '${path.resolve(video)}'`)
      .join("\n");

    await fs.writeFile(fileListPath, fileContent);

    return new Promise((resolve, reject) => {
      ffmpeg()
        .input(fileListPath)
        .inputOptions([
          "-f", "concat",
          "-safe", "0",
        ])
        .outputOptions([
          "-c", "copy",
        ])
        .on("end", async () => {
          console.log("Final story video merged successfully.");

          await fs.remove(fileListPath);

          resolve(outputPath);
        })
        .on("error", async (err) => {
          await fs.remove(fileListPath);
          reject(err);
        })
        .save(outputPath);
    });

  } catch (err) {
    console.error("mergeVideos failed:", err.message);
    throw err;
  }
}

module.exports = {
  createSceneVideo,
  mergeVideos,
  mergeVideoWithAudio,
};
