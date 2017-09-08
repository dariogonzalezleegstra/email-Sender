import { FETCH_USER } from "../actions/types";


export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            //if it's "" put null (doesn't have an user yet)
            return action.payload || false;
        default:
            return state;
    }
}