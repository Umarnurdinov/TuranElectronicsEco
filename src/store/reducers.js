import { combineReducers } from "redux";
import basketReducer from "./basket";
import likeReducer from "./like";
const rootReducer = combineReducers({
    basket:basketReducer,
    like:likeReducer,
    
    
});


export default rootReducer