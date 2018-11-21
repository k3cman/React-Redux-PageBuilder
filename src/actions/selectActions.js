import {SELECT_ELEMENT,MOVE_EL_UP,MOVE_EL_DWN} from './types';

export const selectElement = id => dispatch => {
    dispatch({
        type: SELECT_ELEMENT,
        payload : id
    })
}

export const moveElUp = id => dispatch => {
    dispatch({
        type:MOVE_EL_UP,
        payload: id
    })
}

export const moveElDwn = id => dispatch => {
    dispatch({
        type:MOVE_EL_DWN,
        payload: id
    })
}