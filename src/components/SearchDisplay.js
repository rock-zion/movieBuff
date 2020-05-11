import React,{useEffect}  from 'react'
import Poster from './Poster';
import '../App.css';
import {connect} from 'react-redux';
import {searchMovies} from '../action/index'
import { useParams } from 'react-router-dom';


const SearchDisplay = (props) => {

  let {searchQuery} = useParams()
  let {movie} = props
  useEffect(() => {
    props.searchMovies(searchQuery)
    // eslint-disable-next-line
  },[movie])

  useEffect(() => {
    return function cleanup() {
      return{
        movie:[]
      }
    }
  },[])

  return (
    <div>
    <h1 className="label regular">Search results for {searchQuery}</h1>
    <div className="mother-poster">
      { movie && movie.map((aMovie,index) => {
        return (
          <Poster 
          key={index}
          overview={
            aMovie.overview === undefined ? "Overview: N/A" : aMovie.overview.length < 20 ? aMovie.overview
            :(aMovie.overview.substr(0,200).slice(-1) === "." 
            ? aMovie.overview.substr(0,200)+".." 
            : aMovie.overview.substr(0,200)+"...")
            
            }
          poster={aMovie.poster_path}
          movieid={aMovie.id}
          moviename={aMovie.original_title}
            />
          )
      })}
    </div>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    movie: state.displayMovies.searchResult
  }
}

export default connect(mapStateToProps,{searchMovies})(SearchDisplay)
