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
      let filters = [...state.selectedFilters]

      let findFilter = (filter) => {
        return filter.title === action.payload.title
       }
      
      if(filters.find(findFilter)){
        return {
          ...state
        }
      } else {
      
        let updatedFilters = [...state.selectedFilters, action.payload]
        const filteredList = updateFilteredJobsList(updatedFilters);

        return {
          ...state,
          selectedFilters: updatedFilters,
          filteredJobs: filteredList
        }
      }
    }

  if(action.type === REMOVE_FILTER){
      let selectedFilters = [...state.selectedFilters]
      let filteredArray = selectedFilters.filter(function(filter){return filter.title !== action.payload.title.title})

      const filteredList = updateFilteredJobsList(filteredArray);
      return {
        ...state,
        selectedFilters: filteredArray,
        filteredJobs: filteredList
      }  
    }
  
    return state;

  function updateFilteredJobsList(updatedFilters){
    const filteredList = [];
    const jobs = [...state.allJobs];
    
    jobs.forEach(job => {
      let isIncluded = true;
      for(let filter of updatedFilters){
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