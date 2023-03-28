import {
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAIL,
    CLEAR_ERRORS,
    MY_POST_REQUEST,
    MY_POST_SUCCESS,
    MY_POST_FAIL,
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAIL,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL
  } from "../constants/postConstant";

export const newPostReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_POST_SUCCESS:
        return {
          loading: false,
          post: action.payload,
        };
  
      case CREATE_POST_FAIL:
        return {
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

  export const myPostReducer = (state = {posts:[]}, action) => {
    switch (action.type) {
      case MY_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case MY_POST_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
        };
  
      case MY_POST_FAIL:
        return {
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

  export const postDetailReducer = (state = { post: {} }, action) => {
    switch (action.type) {
      case POST_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case POST_DETAILS_SUCCESS:
        return {
          loading: false,
          post: action.payload.postDetail,
        };
      case POST_DETAILS_FAIL:
        return {
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

  export const postReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_POST_REQUEST:
      case DELETE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
  
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_POST_FAIL:
      case DELETE_POST_FAIL:
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

  export const postsReducer = (state = {posts:[]}, action) => {
    switch (action.type) {
      case 'REMOVE_POST':
        return {
             ...state,
             posts: state.posts.filter((post) => post.id !== action.payload),
        };
     
      default:
        return state;
    }
  };