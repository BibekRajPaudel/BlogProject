import {
    CREATE_POST_SUCCESS,
    CREATE_POST_REQUEST,
    CREATE_POST_FAIL,
    CLEAR_ERRORS,
    MY_POST_REQUEST,
    MY_POST_FAIL,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAIL,
    DELETE_POST_SUCCESS,
    DELETE_POST_REQUEST,
    DELETE_POST_FAIL
  } from "../constant/postConstant";
  
  import axios from "axios";
  
  // Create Order
  export const createPost = () => async (dispatch) => {
    try {
      dispatch({ type: CREATE_POST_REQUEST });
      const { data } = await axios.post("http://localhost:4000/api/v1/post");
  
      dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // My POST
  export const myPosts = () => async (dispatch) => {
    try {
      dispatch({ type: MY_POST_REQUEST });
  
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/posts"
      
      );
  
      dispatch({ type: MY_POST_REQUEST, payload: data.orders });
    } catch (error) {
      dispatch({
        type: MY_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Update POST
  export const updatePost = (id, order) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_POST_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/posts/${id}`,
        order,
      );
  
      dispatch({ type: UPDATE_POST_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Order
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
  
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  