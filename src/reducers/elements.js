import {ADD_TEXT_ITEM} from '../actions/types';

const initialState = [
    {
        id:'h1-1',
        type:'h1',
        sort:1,
        options:{
            text:'This is Heading 1 from redux'
        }
    },
    {
        id:'h2-1',
        type:'h2',
        sort:0,
        options:{
            text:'This is Heading 2 from redux'
        }
    },
    {
        id:'h3-1',
        type:'h3',
        sort:0,
        options:{
            text:'This is Heading 3 from redux'
        }
    }
]

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TEXT_ITEM:
            return [...state, action.payload]
        default:
            return state;
    }
}