import { LOAD_ID_FROM_STORE, CREATE_USER } from './types';

export default function(state = {}, action) {
    switch(action.type){
        case LOAD_ID_FROM_STORE:
            return action.data === null ? null : { ...action.data };
        case CREATE_USER:
            return { ...action.data };
        default:
            return state;
    }
}