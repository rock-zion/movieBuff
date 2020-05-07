import { 
  DISPLAY_LATEST_MOVIES,
  DISPLAY_MOVIE_OVERVIEW,
  GET_RELATED_MOVIES,
  ADD_A_FAVOURITE_MOVIE,
  GET_FAVOURITE_MOVIES,
  GET_CAST,
  GET_TRAILERS,
  GET_COMMENTS,
  SEARCH_MOVIES
} from '../constants/type'
import axios from 'axios';

const API_KEY = '540233a5a183d4dcc122d15ae2b90286'

export const displayLatestMovies = () => {
  return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      console.log(response.data.results)
      dispatch({
        type: DISPLAY_LATEST_MOVIES,
        payload: response.data.results
      })
    }).catch( error => {
      console.log(error) 
    })
  } 
}

export const displayMovieOverview = (payload) => {
  return dispatch => {
    return axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch({
        type: DISPLAY_MOVIE_OVERVIEW,
        payload: response.data
      })
    }).catch( error => {
      console.log(error)
    })
  }
 }

 export const getRelatedMovies = (payload) => {
   return dispatch => {
     return axios.get(`https://api.themoviedb.org/3/movie/${payload}/similar?api_key=${API_KEY}&language=en-US&page=1`)
     .then((response) => {
       const relatedMovies = response.data
       dispatch({
         type: GET_RELATED_MOVIES,
         payload: relatedMovies
        })
     }).catch(error => {
       console.log(error)
     })
   }
 }

 export const addAFavouriteMovie = (payload) => {
  return dispatch => {
    return axios.post(`http://localhost:5000/myFavouriteMovies`,payload)
    .then(response => {
      console.log("Something good is happening",response.data)
      dispatch({
        type: ADD_A_FAVOURITE_MOVIE,
        payload: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
 }

 export const getFavouriteMovies = () => {
   return dispatch => {
     return axios.get(`http://localhost:5000/myFavouriteMovies`)
     .then(response => {
        dispatch({
          type: GET_FAVOURITE_MOVIES,
          payload:response.data
        })
     }).catch(error => {
       console.log(error)
     })
   }
 }

 export const displayCast = (payload) => {
  console.log('this is the payload from displayCast:', payload)
  return dispatch => {
    return axios.get(` https://api.themoviedb.org/3/movie/${payload}/credits?api_key=${API_KEY}`)
    .then(response => {
      dispatch({
        type: GET_CAST,
        payload: response.data.cast
      })
      }).catch(error => {
        console.log(error)
    })
  }
 }

 export const trailers = (payload) => {
   return dispatch => {
     return axios.get(` https://api.themoviedb.org/3/movie/${payload}/videos?api_key=${API_KEY}&language=en-US`)
     .then(response => {
       dispatch({
         type: GET_TRAILERS,
         payload: response.data.results
       })
     }).catch(error => {
       console.log(error)
     })
   }
 }

 export const getComments = (payload) => {
  return dispatch => {
    return axios.get(`https://api.themoviedb.org/3/movie/${payload}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => {
      console.log(response.data.results)
      dispatch({
        type: GET_COMMENTS,
        payload: response.data.results
      })
    }).catch((error) => {
        dispatch({
          type: GET_COMMENTS,
          payload: []
        })
    })
  }
 }

 export const addComment = (payload) => {
   console.log(payload)
  return dispatch => {
    return axios.post(``)
  }
 }

 export const searchMovies = (payload) => {
   return dispatch => {
     return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${payload}&page=1&include_adult=false`)
     .then(response => {
       const searchResults = response.data.results
       if(searchResults.length === 0){
         
       }
       dispatch({
         type: SEARCH_MOVIES,
         payload: searchResults
       })
     }).catch( error => {
       console.log(error)
     })
   }
 }