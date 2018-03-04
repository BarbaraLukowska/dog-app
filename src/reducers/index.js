import { combineReducers } from 'redux';
import * as types from '../types';

const data = (state = {}, action) => {
  switch(action.type) {
    case types.REQUEST_SUCCESS:
      if(action.data)
        return {
          ...state,
          [action.name]: action.data,
        }
      else
        return state;
    case types.CREATE_REQUEST:
      return state;
    case types.REQUEST_FAILURE:
      if(action.error) {
        return {
          ...state,
          error: true
        }
      }
      else {
        return state;
      }
    default:
      return state
    }
  }

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  data,
  isFetching
})

export default rootReducer;