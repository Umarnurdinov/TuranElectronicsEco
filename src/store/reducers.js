import { combineReducers } from "redux";
import basketReducer from "./basket";
import likeReducer from "./like";
import dataInfo from "./dataBack";
import emaildata from "./email";
const rootReducer = combineReducers({
  basket: basketReducer,
  like: likeReducer,
  data: dataInfo,
  email: emaildata,
});

export default rootReducer;
