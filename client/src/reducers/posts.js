import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((data) => data._id !== action.payload);
    default:
      return state;
  }
};
