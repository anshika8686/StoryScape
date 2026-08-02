require("dotenv").config()
const {GoogleGenAI}=require("@google/genai");
const { model } = require("mongoose");

//Client

const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

//character extraction
async function extractCharacters(cleanedStory,scenes){
const prompt = `You are an expert at extracting story characters for an AI story animation application.

TASK:
Extract ONLY the unique characters that appear in the provided scenes.

Use the story only as additional context to infer missing visual details.

Return ONLY valid JSON.

For each character return:

[
  {
    "name": "",
    "species": "",
    "gender": "",
    "age": "",
    "appearance": "",
    "clothing": "",
    "personality": ""
  }
]

RULES:

- Return only unique characters.
- Ignore background people unless they are important.
- If a detail is not explicitly mentioned, make a reasonable inference.
- Keep appearance concise.
- Keep clothing concise.
- Do NOT include explanations.
- Do NOT wrap the JSON inside markdown.

Story:
${cleanedStory}

Scenes:
${JSON.stringify(scenes, null, 2)}
`;

const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt 
});

const cleanedResponse = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

  //convert json text into obj
const character = JSON.parse(cleanedResponse);

return character;
}

module.exports={extractCharacters}