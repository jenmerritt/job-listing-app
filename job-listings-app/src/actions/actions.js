import { DATA_LOADED } from "../constants/action-types";

// export function getData() {
//         fetch("http://localhost:3000/api/data.json")
//         .then(response => response.json())
//         .then(jobs => console.log(jobs));
// };

export function getData() {
    return dispatch => {
        return fetch("http://localhost:3000/api/data.json")
        .then(response => response.json())
        .then(jobs => {
            dispatch({ type: DATA_LOADED, payload: jobs });
        });
    }
}