import { DATA_LOADED } from "../constants/action-types";

export function getData() {
    return dispatch => {
        return fetch("/api/data.json")
        .then(response => response.json())
        .then(jobs => {
            dispatch({ type: DATA_LOADED, payload: jobs });
        });
    }
}