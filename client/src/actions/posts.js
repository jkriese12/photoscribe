import * as api from "../api/index.js";
import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";
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
// Delete creator to delete a specific post
export const deletePhoto = (id) => async (dispatch) => {
  try {
    await api.deletePhoto(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
