import { DATA_LOADED, CLEAR_FILTERS, ADD_FILTER, REMOVE_FILTER } from "../constants/action-types";

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
  if(action.type === CLEAR_FILTERS){
    return{
      ...state,
      selectedFilters: []
    }
  }
  if(action.type === ADD_FILTER){
    return{
      ...state,
      selectedFilters: [...state.selectedFilters, action.payload]
    }
  }
  if(action.type === REMOVE_FILTER){
    let filteredArray = state.selectedFilters.filter(function(filter){return filter.title !== action.payload.title.title})
    console.log(filteredArray)
    return{
      ...state,
      selectedFilters: filteredArray
    }    
  }
  return state;
}

export default rootReducer;