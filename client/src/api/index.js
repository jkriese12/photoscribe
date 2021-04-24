import axios from "axios";

// Defining URL to call from API and exporting function to grab from database
// const url = "http://localhost:3001/api/photos";
const API = axios.create({ baseURL: "http://localhost:3001/api" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getPhotos = () => API.get("/photos");
export const createPost = (newPost) => API.post("/photos", newPost);
// export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);
export const signIn = (details) => API.post("/auth/signin", details);
export const signUp = (details) => API.post("/auth/signup", details);
