import { createStore } from "redux";
import basketReducer from "./basket";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());
export default store;
