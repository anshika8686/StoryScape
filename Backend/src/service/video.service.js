const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs-extra");

function getVideoFilter(effect) {
  switch (effect) {
    case "zoomIn":
      return (
        "zoompan=" +
        "z='min(1+on*0.0012,1.15)':" +
        "x='iw/2-(iw/zoom/2)':" +
        "y='ih/2-(ih/zoom/2)':" +
        "d=150:" +
        "s=1376x768:" +
        "fps=30"
      );

    case "zoomOut":
      return (
        "zoompan=" +
        "z='max(1.15-on*0.0012,1)':" +
        "x='iw/2-(iw/zoom/2)':" +
        "y='ih/2-(ih/zoom/2)':" +
        "d=150:" +
        "s=1376x768:" +
        "fps=30"
      );

    case "panLeft":
      return (
        "zoompan=" +
        "z='1.08':" +
        "x='(iw-iw/zoom)*(1-on/150)':" +
        "y='ih/2-(ih/zoom/2)':" +
        "d=150:" +
        "s=1376x768:" +
        "fps=30"
      );

    case "panRight":
      return (
        "zoompan=" +
        "z='1.08':" +
        "x='(iw-iw/zoom)*(on/150)':" +
        "y='ih/2-(ih/zoom/2)':" +
        "d=150:" +
        "s=1376x768:" +
        "fps=30"
      );

    default:
      return (
        "zoompan=" +
        "z='min(1+on*0.0012,1.15)':" +
        "x='iw/2-(iw/zoom/2)':" +
        "y='ih/2-(ih/zoom/2)':" +
        "d=150:" +
        "s=1376x768:" +
        "fps=30"
      );
  }
}

async function createSceneVideo(imagePath, outputPath, effect) {
  await fs.ensureDir(path.dirname(outputPath));

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
        console.log("Scene video created.");
        resolve(outputPath);
      })

      .on("error", (err) => {
        reject(err);
      })

      .save(outputPath);
  });
}


    async function mergeVideos(videoPaths, outputPath) {
    try {
        await fs.ensureDir(path.dirname(outputPath));

        // Create temporary file list
        const fileListPath = path.join(
            path.dirname(outputPath),
            "videos.txt"
        );

        const fileContent = videoPaths
            .map(video => `file '${path.resolve(video)}'`)
            .join("\n");

        await fs.writeFile(fileListPath, fileContent);

        return new Promise((resolve, reject) => {

            ffmpeg()

                .input(fileListPath)

                .inputOptions([
    "-f", "concat",
    "-safe", "0"
])

                .outputOptions("-c copy")

                .on("end", async () => {

                    console.log("Videos merged successfully.");

                    await fs.remove(fileListPath);

                    resolve(outputPath);
                })

                .on("error", reject)

                .save(outputPath);

        });

    } catch (err) {
        throw err;
    }
}
    
module.exports = {
  createSceneVideo,
  mergeVideos
};
