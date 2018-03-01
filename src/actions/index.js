import axios from 'axios';
import { requestError, requestSuccess, createRequest, handleError } from './requests';
import * as types from '../types';


const URL_API = "https://dog.ceo/api"

export function getAllDogs() {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breeds/list/all`)
      .then((response) => dispatch(requestSuccess(response, 'dogs')))
      .catch(handleError(dispatch));
  }
}


export default getAllDogs();