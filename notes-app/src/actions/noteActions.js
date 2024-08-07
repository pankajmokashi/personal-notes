import axios from "axios";
import { GET_NOTES, ADD_NOTE } from "./types";

export const getNotes = (groupId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/notes/${groupId}`);
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addNote = (text, groupId) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/notes", {
      text,
      groupId,
    });
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
