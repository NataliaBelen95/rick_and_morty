import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorite: [...state.myFavorite, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorite: state.myFavorite.filter(
          (char) => char.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
