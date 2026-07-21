import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function login(username, password) {
  const response = await api.post("/login", {
    username,
    password,
  });

  console.log("Data from login function:");
  console.log(response.data);

  return response.data;
}

export async function signup(username,email,password){
  const response=await api.post("/signup",{ 
    username,
    email,
    password
  })
  console.log("Coming from signup function");
  console.log(response);
  return response.data;
}
