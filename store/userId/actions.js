import { AsyncStorage } from 'react-native';
import { LOAD_ID_FROM_STORE, CREATE_USER } from './types';
import request from '../request';
import { saveImageInBase64 } from '../pics/actions'

export function loadAccountId(dispatch) {
    AsyncStorage.getItem('accountId').then(data => {
        dispatch({type: LOAD_ID_FROM_STORE, data: JSON.parse(data) });
    })
}

export function createUser(dispacth, model) {
    const modelWithoutImage = {...model};
    delete modelWithoutImage.img;

    return request(`${model.role === 0 ? 'runners' : 'jduns'}`,'POST', modelWithoutImage).then(res => {
        const userId = {id: res.name, role: model.role};
        return AsyncStorage.setItem('accountId',JSON.stringify(userId)).then(() => {
            return saveImageInBase64(model.role === 0 ? 'runners' : 'jduns', userId.id, model.img).then((imgAns) => {
                dispacth({ type: CREATE_USER, data: userId });
                return userId;
            });
        })
    })
}