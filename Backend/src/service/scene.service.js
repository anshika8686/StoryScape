require("dotenv").config()
const {GoogleGenAI}=require("@google/genai")

//MAKE CLIENT WHO WILL CALL SERVICES
const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

async function testGemini(){
    const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: "Say hello from Gemini."
});
console.log(response.text);
}

module.exports={
    testGemini
}