require("dotenv").config();
const axios = require("axios");

async function getVoices() {
    try {
        const response = await axios.get(
            "https://api.elevenlabs.io/v2/voices",
            {
                headers: {
                    "xi-api-key": process.env.ELEVENLABS_API_KEY
                },
                params: {
                    page_size: 100
                }
            }
        );

        console.log("\nAvailable voices:\n");

        response.data.voices.forEach((voice) => {
            console.log("--------------------------------");
            console.log("Name:", voice.name);
            console.log("Voice ID:", voice.voice_id);
            console.log("Category:", voice.category);
            console.log("Available tiers:", voice.available_for_tiers);
        });

    } catch (error) {
        console.error(
            error.response?.data || error.message
        );
    }
}

getVoices();
