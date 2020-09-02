import * as apiUtil from '../utils/session';
import { receiveErrors } from "./error";

import { addTimeout, removeTimeout, WATCH_ALL } from 'redux-timeout';

const TIME_OUT = 3600000; // 1 hour

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
    const data = await response.json();

    if (response.ok) {
        dispatch(addTimeout(TIME_OUT, WATCH_ALL, () => {
            alert('The session has expired');
            dispatch(logout());
        }));
        return dispatch(receiveCurrentUser(data));
    }
    return dispatch(receiveErrors(data));
};

export const signup = user => async dispatch => {
    const response = await apiUtil.signup(user);
    const data = await response.json();

    if (response.ok) {
        return dispatch(receiveCurrentUser(data));
    }
    return dispatch(receiveErrors(data));
};

export const logout = () => async dispatch => {
    const response = await apiUtil.logout();
    const data = await response.json();

    if (response.ok) {
        dispatch(removeTimeout(WATCH_ALL));
        return dispatch(logoutCurrentUser());
    }
    return dispatch(receiveErrors(data));
};