import { REQUEST_FAILURE, REQUEST_SUCCESS, CREATE_REQUEST} from '../types';


export function requestError(error) {
  return { error, type: REQUEST_FAILURE };
}

export function requestSuccess(response, name) {
  return { data: (response && response.data) || response, name, type: REQUEST_SUCCESS };
}

export function createRequest(...args) {
  return { ...args, type: CREATE_REQUEST };
}

export function handleError(dispatch) {
  return (error) => {
    dispatch(requestError(error));
    return Promise.reject(error);
  }
}