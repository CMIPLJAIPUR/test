import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    TEMP_PASSWORD_REQUEST,
    TEMP_PASSWORD_SUCCESS,
    TEMP_PASSWORD_FAIL,
    
    EMAIL_PSWD_REQUEST,
    EMAIL_PSWD_SUCCESS,
    EMAIL_PSWD_FAIL,   

    
    EMAIL_verify_REQUEST,
    EMAIL_verify_SUCCESS,
    EMAIL_verify_FAIL,

    VERIFY_EMAIL_URL_FAIL,
    VERIFY_EMAIL_URL_SUCCESS,
    VERIFY_EMAIL_URL_REQUEST,
    CLEAR_ERRORS,
    CLEAR_EMAIL,
    CHECK_USERNAME_AVIALABLITY,
    CHECK_USERNAME_AVIALABLITY_SUCCESS,
  CHECK_USERNAME_AVIALABLITY_FAIL,
    
    UPDATE_EMAIL,
UPDATE_EMAIL_SUCCESS,
UPDATE_EMAIL_FAIL,
  } from "../constants/userConstants";
  import axios from "axios";
  import { setStore } from "../helper/storeHelper";

  
const Base_url = "https://stage-api.nichoshop.com/api";
// Login
export const login = (formData) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      };
      const { data } = await axios.post(
        `${Base_url}/user/sign-in`,
        JSON.stringify(formData),
        config
      );
      if(data.code  != 0) {
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });  
      } else {
        dispatch({ type: LOGIN_FAIL, payload: data });  
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
};
  
// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      };

      const {data} = await axios.post(
        `${Base_url}/sign-up`,
        JSON.stringify(userData),
        config
      );

      if(data.code  != 0) {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data });  
      } else {
        dispatch({ type: REGISTER_USER_FAIL, payload: data });  
      }
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.error,
      });
    }
};

export const VerifyUsingEmailURL = (d) => async (dispatch) => {
    try {
      dispatch({ type: VERIFY_EMAIL_URL_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const {data} = await axios.post(
        `${Base_url}/sign-up/confirm`,
        JSON.stringify(d),
        config
      );

      if(data.code  != 0) {
        dispatch({ type: VERIFY_EMAIL_URL_SUCCESS, payload: data.data });  
        setStore('signup_data',data.data);
        setStore("_userLogin",data.data);
      } else {
        dispatch({ type: VERIFY_EMAIL_URL_FAIL, payload: data });

      }
    } catch (error) {
      dispatch({
        type: VERIFY_EMAIL_URL_FAIL,
        payload: error,
      });
    }
};


// Email verification
export const ResendEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.post(
      `${Base_url}/signup/resend-email`,
      email,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Forgot Password
export const forgotPassword = (email,getceptcha) => async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const {data} = await axios.post (
        `${Base_url}/user/forgot-password/check`,
        JSON.stringify({username:email,recaptcha:getceptcha}),
        config
      );
      if(data.code == 1) {
        dispatch({ 
        type: FORGOT_PASSWORD_SUCCESS, 
        payload: data.data});
        setStore('forgot_data',data.data);
      } else {
        dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: data.message
      });
      }
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.error,
      });
    }
};


// text temp password
export const TempPassword = (phone,getceptcha) => async (dispatch) => {
  try {
    dispatch({ type: TEMP_PASSWORD_REQUEST });
    const payload  = {
        "username": phone,
        "recaptcha": getceptcha
    }
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
      `${Base_url}/user/login-temp/check`,
      JSON.stringify(payload),
      config
    );
    if(data.code == 1) {
      alert("test1")
        dispatch({ 
        type: TEMP_PASSWORD_SUCCESS, 
        payload: data.data});
        setStore('forgot_data',data.data);
      } else {
        alert("test2")
        dispatch({
        type: TEMP_PASSWORD_FAIL,
        payload: data.message
      });
     }
    
  } catch (error) {
    dispatch({ type: TEMP_PASSWORD_FAIL, payload: error.response.data.error });
  }
};

 
// text Email SUC
export const forgotRquest = (payload) => async (dispatch) => {
  
  try {
    dispatch({ type: EMAIL_PSWD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };

    const {data} = await axios.post(
      `${Base_url}/user/forgot-password/request`,
      JSON.stringify(payload),
      config
    );

    if(data.code == 1) {
      dispatch({ 
        type: EMAIL_PSWD_SUCCESS, 
        payload: data 
      });
    } else {
      dispatch({ 
        type: EMAIL_PSWD_FAIL, 
        payload: data.message 
      });
    }
  } catch (error) {
    dispatch({ 
        type: EMAIL_PSWD_FAIL, 
        payload: error.response.data.error });
  }
};


// verify text Email SUC
export const VerifyOTP = (datas) => async (dispatch) => {
  
  try {
    
    const config = { headers: { "Content-Type": "application/json" } };
    dispatch({ type: EMAIL_verify_REQUEST });

    const { data } = await axios.post(
      `${Base_url}/user/forgot-password/confirm`,
      JSON.stringify(datas),
      config
    ); 
    
      if(data.code == 1){
        dispatch({ type: EMAIL_verify_SUCCESS, payload: data });
      } else {
        dispatch({ type: EMAIL_verify_FAIL, payload: data });
      }
    
   
    
  } catch (error) {
    dispatch({ type: EMAIL_verify_FAIL, payload: error.response.data.error });
  }
};

//Check Username exist
export const checkUsernameIsAvailable = (datas) => async (dispatch) => {
  try {
    const TOKEN = JSON.parse(localStorage.getItem("_userLogin"))?.token;
    const config = { headers: { "Content-Type": "application/json","Authorization":`Bearer ${TOKEN}` } };
    dispatch({ type: CHECK_USERNAME_AVIALABLITY });
    const { data } = await axios.put(
      `${Base_url}/user/account/username`,
      JSON.stringify(datas ),
      config
    );
    if(data.code == 1){
      dispatch({ type: CHECK_USERNAME_AVIALABLITY_SUCCESS, payload: data });
    } else {
      dispatch({ type: CHECK_USERNAME_AVIALABLITY_FAIL, payload: data });
    }
    
  } catch (error) {
    // dispatch({ type: CHECK_USERNAME_AVIALABLITY_FAIL, payload: error.response.data.error });
  }
};

//Update Email
export const updateEmail = (datas) => async (dispatch) => {
  console.log("DATAS",datas)
  try {
    const TOKEN = JSON.parse(localStorage.getItem("_userLogin"))?.token;
    const config = { headers: { "Content-Type": "application/json","Authorization":`Bearer ${TOKEN}` } };
    // dispatch({ type: UPDATE_EMAIL });
    const { data } = await axios.put(
      `${Base_url}/user/account/email`,
      JSON.stringify(datas ),
      config
    );
  
    console.log(data)
    // if(data.code == 1){
    //   dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: data });
    // } else {
    //   dispatch({ type: UPDATE_EMAIL_FAIL, payload: data });
    // }
    
  } catch (error) {
    console.log(error)
    // dispatch({ type: CHECK_USERNAME_AVIALABLITY_FAIL, payload: error.response.data.error });
  }
};


// Clearing state
export const clearEmail = () => async (dispatch) => {
    dispatch({ type: CLEAR_EMAIL });
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};