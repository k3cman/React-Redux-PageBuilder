import {SELECT_ELEMENT} from '../actions/types';

const initialState = 
{    select: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SELECT_ELEMENT:
            return {select:action.payload}
        default:
            return state;
    }
}