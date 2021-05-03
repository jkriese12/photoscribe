import axios from "axios";
import { saveAs } from "file-saver";
// Defining URL for the DB
const API = axios.create({ baseURL: "https://photoscribe.herokuapp.com/api" });
// Sending the token and user profile of the logged in user to the back end for DB calls
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
// Routes for getting data
export const getPhotos = () => API.get("/photos");
export const getPhotosByGallery = (albumName) => API.get("/photos/" + albumName);
export const getPhotosNoAuth = (id, albumName) =>
  API.get("/photos/" + id + "/" + albumName);
// Routes for creating data
export const createPost = (newPost) => API.post("/photos", newPost);
// Route for creating a PDF
export const createPdf = (pdf) =>
  API.post("/photos", pdf)
    .then(() => API.get("fetch-pdf", { responseType: "blob" }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "newPdf.pdf");
    });
// Routes for deleting data
export const deletePhoto = (id) => API.delete("/photos/" + id);
// Authentication routes
export const signIn = (details) => API.post("/auth/signin", details);
export const signUp = (details) => API.post("/auth/signup", details);
