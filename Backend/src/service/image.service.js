require("dotenv").config()
const {GoogleGenAI}=require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateImagePrompts(scenes,characters)
{
const prompt = ` 
You are an expert prompt engineer for AI image generation and cinematic scene composition.

Your task is to generate one highly descriptive image prompt AND one cinematic camera effect for each story scene.

The image prompts will be sent to another AI image generation model. That model will ONLY receive the image prompt, so every image prompt must be completely self-contained and visually descriptive.

You are given:

1. A Character Registry containing the official visual appearance of every character.
2. The Story Scenes.

INSTRUCTIONS

- Generate exactly one image prompt for each scene.
- Generate exactly one cinematic effect for each scene.
- Use the Character Registry as the single source of truth for every character's appearance.
- Never change or contradict a character's appearance.
- If multiple characters appear, include each relevant character using their official visual descriptions.
- Describe only what is visually observable.
- Do not include internal thoughts, narration, or backstory.

Clearly describe:

- Characters
- Actions
- Facial expressions
- Body language
- Clothing
- Environment
- Important objects
- Time of day (if known)
- Lighting
- Mood/atmosphere
- Color palette (when helpful)
- Composition
- Camera perspective

STYLE

Choose one artistic style that best matches the overall story and maintain that same style consistently across every scene.

Maintain the SAME visual style across every scene of the story.

Examples include (only when appropriate):

- Storybook Illustration
- Digital Painting
- Fantasy Illustration
- Cinematic Concept Art
- Anime Style
- Semi-Realistic Illustration
- Oil Painting
- Watercolor Illustration
- 3D Animated Film Style

Do not force any particular style.

Do not invent important characters, objects, or locations that are not present in the Character Registry or Scene description.

You may enrich the scene only through:

- lighting
- atmosphere
- color palette
- composition
- camera perspective

Do not add furniture, buildings, decorations, or props unless they are explicitly mentioned or strongly implied.

PROMPT QUALITY

- Each image prompt should be optimized for modern AI image generation models.
- Write rich visual descriptions rather than keyword stuffing.
- Every prompt must be fully understandable on its own.
- When a character appears in a scene, always describe that character using the Character Registry before describing the surrounding environment.
- Do not assume the image model has access to previous scenes or the original story.
- Avoid generic phrases.

Instead of:

"A boy standing outside."

Write:

"A young boy with messy brown hair, wearing a blue cotton shirt and brown trousers, stands outside a small wooden cottage surrounded by wild grass, gazing upward at an enormous green beanstalk stretching into the clouds. Early morning sunlight illuminates the scene with soft golden light, creating a sense of wonder and adventure. Fantasy storybook illustration, cinematic composition, highly detailed."

CINEMATIC EFFECT

For each scene, choose exactly ONE cinematic camera effect from the following list:

- zoomIn
- zoomOut
- panLeft
- panRight
- panUp
- panDown

Choose the effect based on the visual composition and emotional purpose of the scene.

Guidelines:

- zoomIn: Use when the scene should gradually draw attention toward the subject or an important detail.
- zoomOut: Use when the scene should gradually reveal the surrounding environment or establish the larger setting.
- panLeft: Use when the visual composition benefits from a slow horizontal movement toward the left.
- panRight: Use when the visual composition benefits from a slow horizontal movement toward the right.
- panUp: Use when attention should gradually move upward, such as toward a tall structure, sky, or elevated subject.
- panDown: Use when attention should gradually move downward, such as from a higher viewpoint toward a character or object below.

Choose the effect based on what is actually visible in the generated image.

Do NOT invent an effect name.

The effect MUST be exactly one of:

zoomIn
zoomOut
panLeft
panRight
panUp
panDown

OUTPUT FORMAT

Return ONLY valid JSON.

[
  {
    "sceneNumber": 1,
    "imagePrompt": "",
    "effect": "zoomIn"
  }
]

Do not return markdown.
Do not return explanations.
Return only JSON.

Character Registry:

${JSON.stringify(characters, null, 2)}

Scenes:

${JSON.stringify(scenes, null, 2)}
`;
const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

const cleanedResponse = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  //convert json text into obj
  const imagePrompts = JSON.parse(cleanedResponse);
  return imagePrompts;
}


module.exports={
    generateImagePrompts,
}