require("dotenv").config()
const {GoogleGenAI}=require("@google/genai")
const {generateCharacterSheet}=require("../service/character.service")

//MAKE CLIENT WHO WILL CALL SERVICES
const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})


//CALL GEMINI
async function cleanStory(story){

const prompt = `
You are an expert story editor.

The following text has been extracted from a PDF.

Your job is to clean the text.

Remove:
- page numbers
- headers
- footers
- repeated titles
- unnecessary blank lines
- formatting issues

DO NOT:
- Rewrite the story
- Summarize it
- Change dialogues
- Change names

Preserve the author's writing exactly.

Return ONLY the cleaned story.

Story:${story}`;

    const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt 
});
console.log(response.text);
return response.text
}

//It receives clean story 
async function generateScenes(cleanedStory){
    const prompt = `

    You are an expert screenplay writer.

Your task is to convert the following story into cinematic scenes for an animated storytelling application.

OBJECTIVE:
Break the story into meaningful visual scenes that can later be used for AI image and animation generation.

GUIDELINES:

1. Read the complete story before creating scenes.

2. Divide the story into scenes based on IMPORTANT VISUAL EVENTS, not paragraphs.

3. Each scene must represent ONLY ONE major event.

4. Preserve the exact sequence of the story.

5. Do NOT:
- Invent new events
- Invent characters
- Add dialogues
- Skip important events
- Change the story

6. The number of scenes should depend on the story length.

-Generate as many scenes as required to faithfully represent the story.

Each scene should capture one meaningful visual event.

Do not merge important events into one scene.

Do not create unnecessary scenes for minor details.
- Do not merge multiple important events into one scene.

SCENE TITLE:
- Maximum 6 words.
- Clearly describe the event.

SCENE DESCRIPTION:

Write a concise cinematic description of the scene.

The description should contain enough detail to clearly visualize the scene for image and animation generation.

Keep it concise for simple scenes and naturally provide more detail for complex or important scenes.

Avoid unnecessary adjectives, repetitive descriptions, and flowery language.

Focus only on:
- important characters
- important actions
- important objects
- visually observable emotions
- important locations (only when relevant)
- Focus only on what is visually happening.
- Keep the language simple and cinematic.

Each description should clearly describe the beginning of the scene, making it easy to visualize as an animation.

AVOID:
- Excessive adjectives.
- Flowery writing.
- Repeating emotions.
- Repeating physical descriptions.
- Long introductions.
- Background information that is not visually shown.

Do not infer events that are not explicitly mentioned in the story.

If an event is implied but not described, describe only what is directly supported by the story.

GOOD DESCRIPTION EXAMPLE:
"Snow discovers a hidden cave inside the forest. He cautiously walks inside and notices an old turtle waiting in the darkness."

BAD DESCRIPTION EXAMPLE:
"The fluffy white rabbit slowly walks through a beautiful, vibrant, magical forest filled with colorful flowers before carefully approaching an ancient mysterious cave."

Return ONLY valid JSON.

Required format:

[
  {
    "sceneNumber": 1,
    "title": "...",
    "characters": ["..."],
    "description": "..."
  }
]

Story:


Story: ${cleanedStory}`;

const response=await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt 
});

const cleanedResponse = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

//THis converts JSON text into object
const scenes = JSON.parse(cleanedResponse);
return scenes;
}


module.exports={
    cleanStory,
    generateScenes,
}