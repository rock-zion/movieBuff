import React,{useEffect}  from 'react'
import Poster from './Poster';
import '../App.css';
import {connect} from 'react-redux';
import {displayLatestMovies} from '../action/index';


const PosterContainer = (props) => {

  useEffect(() => {
    props.displayLatestMovies()
    window.addEventListener('onscroll',handleScroll)
    // eslint-disable-next-line
  },[])


  function handleScroll(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            alert("you're at the bottom of the page");
        }
  }

  const {movie} = props

  return (
    <div>
    <h1 className="label regular">in cinemas right now</h1>
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
    movie: state.displayMovies.movie,
  }
}
export default connect(mapStateToProps,{displayLatestMovies})(PosterContainer)
