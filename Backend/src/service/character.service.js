require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const { model } = require("mongoose");

//Client

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

//character extraction
async function generateCharacterSheet(cleanedStory, scenes) {
const prompt=`text
You are an expert character designer for an AI-powered animated storytelling application.

TASK

Analyze the story and the generated scenes.

Extract ONLY the unique characters that appear in the provided scenes.

Use the story as additional context to infer missing visual details.

Return ONLY valid JSON.

OUTPUT FORMAT

[
  {
    "name": "",
    "species": "",
    "gender": "",
    "age": "",
    "appearance": "",
    "clothing": "",
    "personality": "",
    "characterSheet": {
      "visualDescription": ""
    }
  }
]

RULES

1. Return only unique characters.

2. Ignore background people or unnamed extras unless they play an important role in the story.

3. Use the story only to infer missing information that is necessary for maintaining a consistent visual identity.

4. Keep these fields concise:
- appearance
- clothing
- personality

5. For "characterSheet.visualDescription":

- Write one complete paragraph.
- Combine the character's physical appearance, hairstyle, facial features, body type, age, clothing, expression, and any visually important accessories.
- Focus entirely on details that can be seen in an illustration.
- Do not describe actions, poses, emotions tied to a specific scene, camera angles, backgrounds, or lighting.
- The description should be detailed enough that an AI image generation model can recreate the same character consistently across every scene.
- End the description by specifying a visual art style that naturally fits the overall story. Infer the style from the story itself instead of forcing one.

Examples of suitable styles include:
- Cinematic Digital Painting
- Semi-Realistic Illustration
- Storybook Illustration
- Fantasy Concept Art
- Anime Style
- Stylized 3D Animation
- Realistic Digital Art
- Watercolor Illustration
- Oil Painting

Choose whichever style best suits the story and keep it consistent for every character.

6. Preserve consistency.

Every character must have one stable visual identity that can be reused throughout the entire story.

7. If a detail is not explicitly mentioned, make a reasonable visual inference without contradicting the story.

8. Avoid unnecessary precision.

Examples:
- "young boy" instead of "8 years old"
- "middle-aged woman" instead of "42 years old"
- "elderly man" instead of "65 years old"

9. Return ONLY valid JSON.

Do not include markdown, explanations, notes, or additional text.
Story:
${cleanedStory}

Scenes:
${JSON.stringify(scenes, null, 2)}
`

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  const cleanedResponse = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  //convert json text into obj
  const characterSheet = JSON.parse(cleanedResponse);
  return characterSheet;
}

module.exports={
  generateCharacterSheet
}
