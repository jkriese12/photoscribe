import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";

export const signIn = (details, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(details);
    dispatch({ type: AUTH, data });
    history.push("/scribe");
  } catch (error) {
    console.log(error);
    alert("Incorrect username or password");
  }
};
export const signUp = (details, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(details);
    dispatch({ type: AUTH, data });
    history.push("/scribe");
  } catch (error) {
    console.log(error);
  }
};
