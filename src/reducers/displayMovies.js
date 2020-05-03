import {DISPLAY_LATEST_MOVIES, DISPLAY_MOVIE_OVERVIEW, GET_RELATED_MOVIES, SEARCH_MOVIES} from '../constants/type'

const initState = {
  movie: [],
  movieOverview: {},
  relatedMovies:{},
  searchResult:[]
}

const displayMovies = (state = initState, action) => {
  switch(action.type){
    case DISPLAY_LATEST_MOVIES:
      return Object.assign({},state,{
        movie: action.payload
      })

    case DISPLAY_MOVIE_OVERVIEW:
      const newMovieOverview = {...state, movieOverview: action.payload}
      return newMovieOverview
    
    case GET_RELATED_MOVIES:
      const newRelatedMovies = {...state, relatedMovies: action.payload} 
      return newRelatedMovies

    case SEARCH_MOVIES:
      return Object.assign({},state,{
        searchResult: action.payload
      })

    default:
      return state
  }
}

export default displayMovies