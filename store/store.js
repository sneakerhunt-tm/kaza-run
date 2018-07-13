import { createStore, combineReducers } from "redux";

import userIdReducer from './userId/reducer';

const store = createStore(
    combineReducers({
        userId: userIdReducer,
    })
)

export default store;