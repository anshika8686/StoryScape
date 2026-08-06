const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs-extra");

async function createSceneVideo(imagePath, outputPath) {

    await fs.ensureDir(path.dirname(outputPath));

    return new Promise((resolve, reject) => {

        ffmpeg(imagePath)

            .loop(5)

            .fps(30)

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

module.exports = {
    createSceneVideo
};