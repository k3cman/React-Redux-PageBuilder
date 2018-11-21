import {ADD_TEXT_ITEM} from './types';

export const addTextItem = item => dispatch => {
    dispatch({
        type: ADD_TEXT_ITEM,
        payload : item
    })
}