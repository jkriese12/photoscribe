import axios from "axios";
// Defining URL to call from API and exporting function to grab from database
const url = "http://localhost:3001/api/photos";
export const getPhotos = () => axios.get(url);
