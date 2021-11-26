import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import RootReducer from "./RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper"

const makeStore = ()=> createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createWrapper(makeStore);
export default store;