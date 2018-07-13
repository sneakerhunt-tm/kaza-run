import { AsyncStorage } from 'react-native';
import { LOAD_ID_FROM_STORE } from './types';

export function loadAccountId(dispatch) {
    AsyncStorage.getItem('accountId').then(data => {
        dispatch({type: LOAD_ID_FROM_STORE, data });
    })
}