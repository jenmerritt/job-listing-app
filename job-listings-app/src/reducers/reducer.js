import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  jobs: [],
  selectedFilters: []
};

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    return {
      ...state,
      jobs: action.payload
    }
  }
  return state;
}

export default rootReducer;