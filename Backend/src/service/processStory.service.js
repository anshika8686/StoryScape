const {cleanStory, generateScenes}=require("../service/scene.service")
const {generateCharacterSheet}=require("../service/character.service")
const {generateImagePrompts,generateImage}=require("../service/image.service")


async function processStory(story,storyId){
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
    const imagePrompts=await generateImagePrompts(scenes,characters);
    console.log(imagePrompts)
    
//embed image prompts in their particular scene 
    const updatedScenes = scenes.map((scene) => {
    const matchingPrompt = imagePrompts.find(
        (prompt) => prompt.sceneNumber === scene.sceneNumber
    );

    return {
        ...scene,
        imagePrompt: matchingPrompt?.imagePrompt || "",
    };
});
console.log(" generating image prompt ended")

// console.log(" generating image started")
// for (const scene of updatedScenes) {
//     console.log(
//     `Generating image for Scene ${scene.sceneNumber}...`
// );
//     const imageUrl = await generateImage(scene.imagePrompt,
//         storyId,scene.sceneNumber
//     );
//     scene.imageUrl = imageUrl;
// }

console.log("processStory completed.");


    return {
        cleanedStory,
        scenes:updatedScenes,
        characters,
    };
}
module.exports={processStory}
