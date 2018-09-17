import * as constants from "constants/actionTypes/login";
import { AsyncStorage } from 'react-native';
import { FB_LOGIN_SUCCESS } from "constants/actionTypes/login";
import { Facebook } from 'expo';
import facebookAppID from 'constants/facebookAppID';
import {FB_TOKEN_IDENTIFIER} from "constants/actionTypes/login";

export const checkFbLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem(constants.FB_TOKEN_IDENTIFIER);
    if (token) {
        console.log(token);
        dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
    } else {
        console.log('NO TOKEN');
        tryFbLogin(dispatch )
    }
};

const tryFbLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookAppID, {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: constants.FB_LOGIN_FAILURE });
    }

    await AsyncStorage.setItem(FB_TOKEN_IDENTIFIER, token);
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
};
