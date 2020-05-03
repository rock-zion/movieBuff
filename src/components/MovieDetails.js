import React,{useState,useEffect} from 'react'
import addToFavouritesIcon from '../assets/add-to-favourites-icon.svg'
import addedToFavouritesBlack from '../assets/added-to-favourites-black.svg'
import {connect} from 'react-redux'
import {getFavouriteMovies,addAFavouriteMovie} from '../action/index'
import WatchTrailer from './WatchTrailer'


export const MovieDeets = (props) => {

  const{ movieOverview, movieid, moviename, myFavouriteMovies} = props

  const [myFavourites, setMyFavourites] = useState(false)
  const [favourite, setFavourite] = useState({
    id:"",
    favouriteMovieID: "",
    favouriteMovieName: ""
  })

  let newTemFavMovieObject = { 
    ...favourite, 
    favouriteMovieID: movieid,
    favouriteMovieName: moviename
  }

  useEffect( () => {
    check()
    //eslint-disable-next-line
  },[myFavouriteMovies])

  const check = () => {
    myFavouriteMovies.length > 0 && 
    myFavouriteMovies.find(el => el.favouriteMovieID === movieid) ?
    setMyFavourites(true): 
      setFavourite(favourite)
  }



  //populate favourite movies
  const handleFavourites = () => {
    if(myFavouriteMovies.length === 0 ){ //checks if the array is empty
      props.addAFavouriteMovie(newTemFavMovieObject)
      newTemFavMovieObject = {}
    }else if(myFavouriteMovies.length > 0 &&  myFavouriteMovies.find(el => el.favouriteMovieID === movieid)){console.log('this movie is already in the db');}
    else if(myFavouriteMovies.length > 0 && !myFavouriteMovies.find(el => el.favouriteMovieID === movieid)){
      props.addAFavouriteMovie(newTemFavMovieObject)
      newTemFavMovieObject = {}
    }
  }
  //populate favourite movies


  return (
    <>
        <h2 className="movie-title-label regular"> Movie Title </h2>
        <h1 className="movie-title bold">{movieOverview.original_title}</h1>
        <h4 className="tagline bold"> {movieOverview.tagline} </h4>
        <h5 className="small-label regular">Genre</h5>
        <div className="genre-mother-container">
          {movieOverview.genres && movieOverview.genres.map( (gen,index) => {
            return <div className="genre-container" key={index}>
              <div className="genre-pointer"></div>
              <p className="genre medium">{gen.name}</p>
            </div>
          })}
        </div>
        <h5 className="small-label regular">Budget</h5>
        <h4 className="tagline bold">{movieOverview.budget === 0 ? "N/A" : `$ ${movieOverview.budget}`}</h4>
        <div className="fav-trailer">
        <button
        onClick={() => {handleFavourites()}} 
        className={ !myFavourites ? "add-to-favourites-btn" : "added-to-favourites"} >
          <img 
            className="add-to-favourites-icon" 
            src={!myFavourites ? addToFavouritesIcon : addedToFavouritesBlack } alt=""/>
            {!myFavourites? "Add to favourites" : "Added to favourites"}
        </button>
        <WatchTrailer movieid={movieid}/>
        </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    myFavouriteMovies: state.myFavourites.myFavouriteMovies
  }
}

const MovieDetails = connect(mapStateToProps,{getFavouriteMovies,addAFavouriteMovie})(MovieDeets) 
export default MovieDetails
