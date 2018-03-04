import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';


const URL_API = "https://dog.ceo/api"


//get all breed images
export function getDogImages(breed) {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breed/${breed}/images`)
      .then((response) => dispatch(requestSuccess(response.data.message, 'breed')))
      .catch(handleError(dispatch));
  }
}
