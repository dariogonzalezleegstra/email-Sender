import axios from 'axios';

import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER, payload: response.data});
};


export const handleToken = (token) => async dispatch => {
    const response = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: response.data});
};


//Why only two lines? :

// dispatch will modify the store (state of redux) when
// axios promise have a response

//With arrow functions like fetchUser we could not use
// () => {return blabla}; instead we can put () => blabla.
// But only when there is just one assignment inside it.

//Also, we can put (dispatch) without () because it's just
//one parameter.

//With ES2017, we can use "async" "await" instead .then()





//Old way: (works too)

// export const fetchUser = () =>
//     function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(response => dispatch({
//                 type: FETCH_USER,
//                 payload: response.data
//             }));
//     };
