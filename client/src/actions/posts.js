import * as api from "../api/index.js";
import { FETCH_ALL, CREATE } from "../constants/actionTypes";
// Gets all posts for the user
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPhotos();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// Only returns post data based on the gallery they want to visit
export const getPostsGallery = (albumName) => async (dispatch) => {
  try {
    const { data } = await api.getPhotosByGallery(albumName);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// Gets post data based on gallery but does not require auth and can be sent as a hyperlink for anyone to view
export const getPostsGalleryNoAuth = (id, albumName) => async (dispatch) => {
  try {
    const { data } = await api.getPhotosNoAuth(id, albumName);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// Creates a post for that user to the database
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// Action creator to update a specific photo
// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);
//     dispatch({ type: "UPDATE", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
