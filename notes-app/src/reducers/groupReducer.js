import { GET_GROUPS, ADD_GROUP, SET_SELECTED_GROUP } from "../actions/types";

const initialState = {
  groups: [],
  selectedGroup: null,
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case SET_SELECTED_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
