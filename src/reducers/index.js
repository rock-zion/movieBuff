import { combineReducers } from "redux";
import myFavourites from './myFavourites';
import displayMovies from './displayMovies'
import displayCast from './displayCast'
import getTrailers from './getTrailers'
import getComments from './getComments'

const rootReducer = combineReducers({
  displayMovies,
  myFavourites,
  displayCast,
  getTrailers,
  getComments,
})

export default rootReducer