import {combineReducers} from 'redux'
import elements from './elements';
import select from './select';
export default combineReducers({
  elements,
  select
})