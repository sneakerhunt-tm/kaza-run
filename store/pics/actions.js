import { LOAD_IMAGE_BASE64 } from './types';
import request from '../request';

/**
 * 
 * @param {String} userType ['runners','jduns']
 * @param {String} userId 
 * @param {String} base64 
 */
export function saveImageInBase64(userType, userId, base64) {
    return request(`pics/${userType}/${userId}`, 'PUT', base64);
}

export function getImageInBase64(dispatch, userType, userId) {
    return request(`pics/${userType}/${userId}`).then(res => {
        dispatch({type: LOAD_IMAGE_BASE64, data: {id: userId, res }})
        return res;
    })

}