import { LOAD_ID_FROM_STORE } from './types';

export default function(state = '', action) {
    switch(action.type){
        case LOAD_ID_FROM_STORE:
            return action.data;
        default:
            return state;
    }
}