import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    console.log(data);

    return dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );

    return dispatch({
      type: DELETE_FAVORITE,
      payload: data,
    });
  };
};
