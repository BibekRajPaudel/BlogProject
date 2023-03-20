import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newPostReducer,
  myPostReducer,
  postReducer
} from "./reducer/postReducer";

const reducer = combineReducers({
 posts:newPostReducer,
 deletedPosts:postReducer,
 postDetails:myPostReducer
});

let initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
