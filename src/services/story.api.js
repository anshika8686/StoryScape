import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000/api/story",
  withCredentials: true,
});


export async function generatestory(story) {
  const response = await api.post("/generate-story", {
    story
  });

  console.log("Data from generate story function:");
  console.log(response.data);
  return response.data;
}