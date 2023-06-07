// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "../reducers/index";

const middleware=[thunk];
const initialState = {} // or in your case:

//const middleware=[thunk,logger];

// const store=configureStore(
//   {
//   reducer:allReducers,
//   middleware:middleware,
// }
// );

const store=createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


// const persistor=persistStore(store);

export default store ;
// export {persistor};