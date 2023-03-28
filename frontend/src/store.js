import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { myPostReducer, newPostReducer, postDetailReducer, postReducer, postsReduc, postsReducer } from "./reducer/postReducer";

const reducer = combineReducers({
    myPost:myPostReducer,
    newPost:newPostReducer,
    postDetail:postDetailReducer,
    deletePost:postReducer,
    editPost:postReducer
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
