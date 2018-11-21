import {SELECT_ELEMENT} from '../actions/types';

const initialState = {
    selectedId: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SELECT_ELEMENT:
            return {selectedId: action.payload}
        default:
            return state;
    }
}