import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';
import {SEARCH_BY_BREED} from '../types';


const URL_API = "https://dog.ceo/api"

// get all dogs (all breeds and sub-breeds)
export function getAllDogs() {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breeds/list/all`)
      .then((response) => dispatch(requestSuccess(response, 'dogs')))
      .catch(handleError(dispatch));
  }
}

//all breeds name list
export function getBreedNames(breeds) {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breeds/list`)
      .then((response) => dispatch(requestSuccess(response, 'breeds')))
      .catch(handleError(dispatch));
  }
}

export function searchByBreed(filteredByBreed) {
  return (dispatch) => {
    dispatch({type: SEARCH_BY_BREED, filteredByBreed});
    return Promise.resolve(filteredByBreed)
  }
}

//get all breed images
export function getDogImages(breed) {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breed/${breed}/images`)
      .then((response) => dispatch(requestSuccess(response, 'breed')))
      .catch(handleError(dispatch));
  }
}
