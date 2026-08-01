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

export async function uploadPdf(file) {
  const formData=new FormData() // creating instance of formData
  formData.append("pdf",file) //formData.append("key name",filename)
  
 try
 { 
  const response = await api.post("/upload-pdf", formData,{
    headers:{
      "Content-Type": "multipart/form-data",
    }
  });

  console.log("Data from generate upload pdf function from frontend:");
  console.log(response.data);
  return response.data;
}
catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
}
