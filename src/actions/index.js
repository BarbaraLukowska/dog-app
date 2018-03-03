import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';
import {SEARCH_BY_BREED} from '../types';


const URL_API = "https://dog.ceo/api"

export function getAllDogs() {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breeds/list/all`)
      .then((response) => dispatch(requestSuccess(response, 'dogs')))
      .catch(handleError(dispatch));
  }
}

export function getBreedNames(breeds) {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breeds/list`)
      .then((response) => dispatch(requestSuccess(response, 'breeds')))
      .catch(handleError(dispatch));
  }
}


// //name undefined
// export function getDogImages(breed) {
//   return (dispatch) => {
//     dispatch(createRequest());
//     return axios.get(`${URL_API}/breed/${breed}/images`)
//       .then((response) => dispatch(requestSuccess(response, 'breedName')))
//       .catch(handleError(dispatch));
//   }
// }
