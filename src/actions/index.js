import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';


const URL_API = "https://dog.ceo/api"


//get all breed images
export function getDogImages(images) {
  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${URL_API}/breed/${images}/images`)
      .then((response) => dispatch(requestSuccess(response.data.message, 'images')))
      .catch(handleError(dispatch));
  }
}
