import axios from "axios";
import { GET_GROUPS, ADD_GROUP, SET_SELECTED_GROUP } from "./types";

export const getGroups = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/groups");
    dispatch({
      type: GET_GROUPS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addGroup = (name, color) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/groups", {
      name,
      color,
    });
    dispatch({
      type: ADD_GROUP,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const setSelectedGroup = (group) => ({
  type: SET_SELECTED_GROUP,
  payload: group,
});
