require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const { model } = require("mongoose");

//Client

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

//character extraction
async function generateCharacterSheet(cleanedStory, scenes) {
const prompt=  `You are an expert character designer for an AI-powered animated storytelling application.

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

3. Use the story only to infer missing information.

4. If a detail is not explicitly mentioned, make a reasonable and consistent inference suitable for a children's animated story.

5. Keep these fields short:
- appearance
- clothing
- personality

6. For "characterSheet.visualDescription":
- Write one complete paragraph.
- Combine appearance, hairstyle, facial features, clothing, age, body type, expression and overall look.
- The description should be detailed enough that an image generation model can recreate the same character consistently across every scene.
- Keep the description visually focused.
- Do not describe actions or scenes.
- Do not mention camera angles or backgrounds.
- End with:
  "Children's storybook illustration style."

7. Preserve consistency.
Every character should have one stable visual identity that can be reused throughout the story.

8. Return ONLY valid JSON.
Do not include markdown, explanations, notes or extra text.

If a detail is not explicitly mentioned, make a reasonable visual inference.

Avoid unnecessary specificity.

For example:
- Use "young boy" instead of "8 years old".
- Use "middle-aged woman" instead of "42 years old".
- Use "elderly man" instead of "65 years old".

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
