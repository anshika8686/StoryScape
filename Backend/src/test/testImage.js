require("dotenv").config();

const { generateImage } = require("../service/imagegen.service");


async function test() {
  try {
    const imagePath = await generateImage(
      "An elderly man with messy silver-gray hair wearing a dark green knitted cardigan, sitting at a wooden desk typing on a vintage mechanical keyboard in front of a glowing green CRT computer terminal. Cinematic digital painting, highly detailed, dramatic lighting.",
      "test-story",
      1
    );

    console.log("Image generated successfully!");
    console.log(imagePath);
  } catch (err) {
    console.error(err.message);
  }
}

test();