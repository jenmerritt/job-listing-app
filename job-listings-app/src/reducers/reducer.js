import { DATA_LOADED, CLEAR_FILTERS, ADD_FILTER, REMOVE_FILTER } from "../constants/action-types";

const initialState = {
  allJobs: [],
  selectedFilters: [],
  filteredJobs: []
};

function rootReducer(state = initialState, action) {

  if (action.type === DATA_LOADED) {
    return {
      ...state,
      allJobs: action.payload
    }
  }
  if(action.type === CLEAR_FILTERS){
    return{
      ...state,
      selectedFilters: [],
      filteredJobs: []
    }
  }

  if(action.type === ADD_FILTER){
    let filters = state.selectedFilters

    let findFilter = (filter) => {
      return filter.title === action.payload.title
    }
    if(filters.find(findFilter)){
      return {
        ...state
      }
    }
    else{
      state = {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload],
        filteredJobs: []
      }
      const filteredList = updateFilteredJobsList();
      return {
        ...state,
        filteredJobs: filteredList
      }
    }
  }

  if(action.type === REMOVE_FILTER){
    let filteredArray = state.selectedFilters.filter(function(filter){return filter.title !== action.payload.title.title})
    return{
      ...state,
      selectedFilters: filteredArray
    }    
  }
  return state;

  function updateFilteredJobsList(){
    const filters = state.selectedFilters;
    const filteredList = state.filteredJobs;
    const jobs = state.allJobs;
    
    jobs.forEach(job => {
      let isIncluded = true;
      for(let filter of filters){
        switch(true){
          case job.role === filter.title:
          case job.level === filter.title:
          case job.languages && job.languages.includes(filter.title):
          case job.tools && job.tools.includes(filter.title):
              break;
          default:
            isIncluded = false;
            break;
        }
      }
      if(isIncluded) filteredList.push(job)
    });
    return filteredList;
  }

  
}

export default rootReducer;