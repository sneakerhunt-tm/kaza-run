import { createStore, combineReducers } from "redux";

import userIdReducer from './userId/reducer';
import picsReducer from './pics/reducer';

const store = createStore(
    combineReducers({
        pics: picsReducer,
        userId: userIdReducer,
    })
)

export default store;