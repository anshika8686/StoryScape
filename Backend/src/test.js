require("dotenv").config()
const {cleanStory,generateScenes}=require("../src/service/scene.service")
const sampleStory = `
Page 1

The Brave Rabbit

Once upon a time there lived a rabbit named Snow.

He loved exploring forests.

One day he found a mysterious cave.

Inside the cave he met an old turtle.

The turtle gave him a magical crystal.

Snow returned home a hero.

Page 2
`;

async function test() {

    console.log("========== ORIGINAL ==========\n");
    console.log(sampleStory);

    const cleanedStory = await cleanStory(sampleStory);

    console.log("\n========== CLEANED ==========\n");
    console.log(cleanedStory);

    const scenes = await generateScenes(cleanedStory);

    console.log("\n========== SCENES ==========\n");

    console.dir(scenes, { depth: null });

}

test();