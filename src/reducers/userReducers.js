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

  ADD_MOBILE_REQUEST,
  ADD_MOBILE_SUCCESS,
  ADD_MOBILE_FAIL,

  ADD_MOBILE_verify_REQUEST,
  ADD_MOBILE_verify_SUCCESS,
  ADD_MOBILE_verify_FAIL,

  TXT_PSWD_REQUEST,
  TXT_PSWD_SUCCESS,
  TXT_PSWD_FAIL,

  EMAIL_PSWD_REQUEST,
  EMAIL_PSWD_SUCCESS,
  EMAIL_PSWD_FAIL,

  EMAIL_verify_REQUEST,
  EMAIL_verify_SUCCESS,
  EMAIL_verify_FAIL,

  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAIL,

  CLEAR_ERRORS,
  CLEAR_EMAIL,
  VERIFY_EMAIL_URL_REQUEST,
  VERIFY_EMAIL_URL_SUCCESS,
  VERIFY_EMAIL_URL_FAIL,

  FORGOT_PASSWORD_INITIAL,

  CHECK_USERNAME_AVIALABLITY,
  CHECK_USERNAME_AVIALABLITY_SUCCESS,
  CHECK_USERNAME_AVIALABLITY_FAIL,

  UPDATE_EMAIL,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAIL,
} from "../constants/userConstants";

export const UserReducer = (state = {}, action) => {

  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_REQUEST:
    case VERIFY_EMAIL_URL_REQUEST:
      // case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        signup: true,
        isAuthenticated: false,
      };

    case VERIFY_EMAIL_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signin: true,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case VERIFY_EMAIL_URL_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload.message,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;

  }
}


export const ForgotPasswordReducer = (state = { forgotPassword: {} }, action) => {

  switch (action.type) {

    case FORGOT_PASSWORD_INITIAL:
      return {
        ...state,
        error: null,
        temp_pwd: false,
        email_pwd: false,
        data: null
      }
    case FORGOT_PASSWORD_REQUEST:
    case EMAIL_PSWD_REQUEST:
    case TEMP_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };


    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        fp: true,
        data: action.payload,
      }

    case TEMP_PASSWORD_SUCCESS:
    case EMAIL_PSWD_SUCCESS:
      return {
        ...state,
        loading: false,
        fp: true,
        temp_pwd: true,
        email_pwd: true,
        data: action.payload,
      };

    case FORGOT_PASSWORD_FAIL:
    case EMAIL_PSWD_FAIL:
    case TEMP_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const MobileReducer = (state = { mobile: {} }, action) => {

  switch (action.type) {
    case ADD_MOBILE_REQUEST:
    case TXT_PSWD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_MOBILE_SUCCESS:
    case TXT_PSWD_SUCCESS:
      return {
        ...state,
        loading: false,
        add_mob: true,
        txt_pwd: true,
        message: action.payload,
      };

    case ADD_MOBILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TXT_PSWD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const MobileVerifyReducer = (state = {}, action) => {

  switch (action.type) {
    case ADD_MOBILE_verify_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_MOBILE_verify_SUCCESS:
      return {
        ...state,
        loading: false,
        verify: true,
        messagess: action.payload?.message,
      };

    case ADD_MOBILE_verify_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const EmailReducer = (state = {}, action) => {

  switch (action.type) {
    case EMAIL_verify_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case EMAIL_verify_SUCCESS:
      return {
        ...state,
        loading: false,
        email_verify: true,
        message: action.payload.data,
      };

    case EMAIL_verify_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CHECK_USERNAME_AVIALABLITY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHECK_USERNAME_AVIALABLITY_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload,
        error: null
      };
    case CHECK_USERNAME_AVIALABLITY_FAIL:
      return {
        ...state,
        loading: false,
        email: action.payload,
        error: null,
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload,
        error: null
      };
    case UPDATE_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        email: action.payload,
        error: null,
      };
    case CLEAR_EMAIL:
      return {
        ...state,
        email: null,
      };
    default:
      return state;
  }
};



export const AddressReducer = (state = {}, action) => {

  switch (action.type) {
    case ADD_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        add_address: true,
        message: action.payload.data,
      };

    case ADD_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};