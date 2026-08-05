const {cleanStory, generateScenes}=require("../service/scene.service")
const {generateCharacterSheet}=require("../service/character.service")
const {generateImagePrompts}=require("../service/image.service")


async function processStory(story){
    console.log("Calling processStory...");

    console.log("Called cleaned story")
    const cleanedStory=await cleanStory(story);
    console.log(" cleaned story ended")


    console.log(" generating scenes")
    const scenes=await generateScenes(cleanedStory);
    console.log(scenes)
    console.log(" generating scenes ended")


    console.log(" generating characters")
    const characters=await generateCharacterSheet(cleanedStory,scenes);
    console.log(characters)
    console.log(" generating characters ended")


    console.log(" generating image prompt")
    const imagePrompt=await generateImagePrompts(scenes,characters);
    console.log(imagePrompt)
    console.log(" generating image prompt ended")

    const updatedScenes = scenes.map((scene) => {
    const matchingPrompt = imagePrompt.find(
        (prompt) => prompt.sceneNumber === scene.sceneNumber
    );

    return {
        ...scene,
        imagePrompt: matchingPrompt?.imagePrompt || "",
    };
});


    console.log("processStory completed.");


    return {
        cleanedStory,
        scenes:updatedScenes,
        characters,
    };

}
module.exports={processStory}