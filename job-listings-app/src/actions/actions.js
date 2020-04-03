import { DATA_LOADED, CLEAR_FILTERS, ADD_FILTER, REMOVE_FILTER } from "../constants/action-types";

export function getData() {
    return dispatch => {
        return fetch("/api/data.json")
        .then(response => response.json())
        .then(jobs => {
            dispatch({ type: DATA_LOADED, payload: jobs });
        });
    }
}

export function clearFilters(){
    return { type: CLEAR_FILTERS };
}

export function addFilter(filter){
    return { type: ADD_FILTER, payload: {title: filter}}
}

export function removeFilter(filter){
    return { type: REMOVE_FILTER, payload: {title: filter}}
}
