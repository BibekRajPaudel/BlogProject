import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  MY_POST_REQUEST,
  MY_POST_SUCCESS,
  MY_POST_FAIL,
  CLEAR_ERRORS,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL
} from "../constants/postConstant";
import axios from "axios";

// Create Post
export const createPost = () => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST });
    const { data } = await axios.post("http://localhost:5400/api/v1/post");

    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My Posts
export const myPosts = () => async (dispatch) => {
    try {
      dispatch({ type: MY_POST_REQUEST });
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/posts"
      );
  
      dispatch({ type: MY_POST_SUCCESS, payload: data.getPost });
    } catch (error) {
      console.log(error, "adfadf")
      dispatch({
        type: MY_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Get Post Detail
export const getPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type:POST_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/posts/${id}`
    );
    console.log(data, "data")

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Edit Post
export const editPost = (id) => async (dispatch) => {
  try {
    dispatch({ type:UPDATE_POST_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/posts/${id}`
    );

    dispatch({ type: UPDATE_POST_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/posts/${id}`
    );

    dispatch({ type: DELETE_POST_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Post
export const removePost = (id) => ({
  type: 'REMOVE_POST',
  payload: id,
});


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
