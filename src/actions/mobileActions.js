import {
    ADD_MOBILE_REQUEST,
    ADD_MOBILE_SUCCESS,
    ADD_MOBILE_FAIL,  
    ADD_MOBILE_verify_REQUEST,
    ADD_MOBILE_verify_SUCCESS,
    ADD_MOBILE_verify_FAIL ,  

    CLEAR_ERRORS,
  } from "../constants/userConstants";
import axios from "axios";
import {
  getLocalstore,
  setLocalstore
} from "../helper/localstore/localstore";
  
const Base_url = "https://stage-api.nichoshop.com/api";


const getToken = () => {
  const user = getLocalstore('_userLogin');
  return 'Bearer'+' '+user.token;
}
// Add mobile no
export const AddMobile = (phone) => async (dispatch) => {
    try {
      dispatch({ type: ADD_MOBILE_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json", Authorization:getToken() } };
      const { data } = await axios.post(
        `${Base_url}/user/phone-number`,
        JSON.stringify({phoneNumber:`+${phone}`}),
        config
      );

      if(data.code == 1){
        dispatch({ type: ADD_MOBILE_SUCCESS, payload: data });
        setLocalstore('isRequestedOtp', true);
      } else {
        dispatch({ type: ADD_MOBILE_FAIL, payload: data?.message });
      }
      
    } catch (error) {
      dispatch({ type: ADD_MOBILE_FAIL, payload: error?.response?.data?.error });
    }
};



// mobile no verify
export const VerifyMobile = (code) => async (dispatch) => {
  // console.log('Test'); 
  // event.preventDefault();
try {
  dispatch({ type: ADD_MOBILE_verify_REQUEST });
  const config = { headers: { "Content-Type": "application/json", Authorization:getToken() } };

  const { data } = await axios.post(
    `${Base_url}/user/phone-number/confirm`,
    JSON.stringify({code: code}),
    config
  );
  if(data.code == 1){
    dispatch({ type: ADD_MOBILE_verify_SUCCESS, payload: data });
  } else {
    dispatch({ type: ADD_MOBILE_verify_FAIL, payload: data?.message });
  }
  
} catch (error) {
  dispatch({ type: ADD_MOBILE_verify_FAIL, payload: error.response.data.error });
}
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};