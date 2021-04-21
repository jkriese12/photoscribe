import axios from "axios";
// Defining URL to call from API and exporting function to grab from database
const url = "http://localhost:3001/api/photos";

export const getPhotos = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);
export const signIn = (details) =>
  axios.post("http://localhost:3001/api/auth/signin", details);
export const signUp = (details) =>
  axios.post("http://localhost:3001/api/auth/signup", details);
