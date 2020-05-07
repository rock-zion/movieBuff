import React ,{useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import {displayMovieOverview} from '../action/index'
import {connect} from 'react-redux'
import Poster from './Poster'
import RelatedMovies from '../components/RelatedMovies'
import MovieDetails from './MovieDetails'
import DisplayCast from './DisplayCast'
import Comments from './Comments'


const MovieOverview = (props) => {

  let {movieid, moviename} = useParams()
  const { movieOverview } = props

  useEffect(() => {  
  props.displayMovieOverview(movieid)
  //eslint-disable-next-line
  },[movieid])

  return(
    <Fragment>
    <div className="movie-details-container">
      <Poster overviewposter={'overviewposter'} poster={movieOverview.poster_path} />
      <div className='moviedetails'>
      <MovieDetails 
        movieOverview={movieOverview}
        moviename={moviename}
        movieid={movieid}
      />
      </div>
    </div>
    <Comments movieid={movieid}/>
    <div className='display-cast-mother'>
      <DisplayCast movieid={movieid} />
    </div>

    <div>
      <RelatedMovies 
      movieid={movieid}
      moviename={moviename}
      />
    </div>
    <div style={{height: "100px"}}>

    </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    movieOverview: state.displayMovies.movieOverview,
    myFavouriteMovies: state.myFavourites.myFavouriteMovies,
  }
}

export default connect(mapStateToProps,{displayMovieOverview})(MovieOverview) 
