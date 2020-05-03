import {ADD_A_FAVOURITE_MOVIE,GET_FAVOURITE_MOVIES} from '../constants/type'

const  initialState = {
  myFavouriteMovies: []
}

const myFavouriteMovies = (state = initialState,action) => {
  switch(action.type){
    case ADD_A_FAVOURITE_MOVIE:
      return Object.assign({},state,{
        myFavouriteMovies: state.myFavouriteMovies.concat(action.payload)
      })

    case GET_FAVOURITE_MOVIES:
      return  Object.assign({},state,{
        myFavouriteMovies: state.myFavouriteMovies.concat(action.payload)
      })

    default:
      return state
  }
}

export default myFavouriteMovies