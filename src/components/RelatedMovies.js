import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getRelatedMovies} from '../action/index'
import Poster from './Poster';

const Related = (props) => {
  const {movieid, relatedMovies} = props
  useEffect(() => {
    props.getRelatedMovies(movieid)
    //eslint-disable-next-line
  },[props.movieid])
  return (
    <>
    <h2 className='big-label regular'>Related movies</h2>
    <div className="relatedMovies-container">
      {relatedMovies.results && relatedMovies.results.map((relMovie,index) => {
        return(
          <Poster key={index}
            poster={relMovie.poster_path}
            movieid={relMovie.id}
            moviename={relMovie.title}
          />
        )
      })}
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return{
    relatedMovies: state.displayMovies.relatedMovies
  }
}

const RelatedMovies = connect(mapStateToProps,{getRelatedMovies})(Related)
export default RelatedMovies
