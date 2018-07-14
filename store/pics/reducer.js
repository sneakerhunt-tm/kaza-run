import { LOAD_IMAGE_BASE64 } from './types'

export default function(state = {}, action) {
    switch(action.type){
        case LOAD_IMAGE_BASE64:
            return { ...state, ...({ [action.data.id]: action.data.res }) };
        default:
            return state;
    }
}