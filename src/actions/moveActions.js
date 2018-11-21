import {SELECT_ELEMENT} from './types';

export const selectElement = id => dispatch => {
    dispatch({
        type:SELECT_ELEMENT,
        payload: id
    })
}