import React,{useEffect} from 'react'
import myFavIcon from '../assets/added-to-favourites-yellow.svg'
import {connect} from 'react-redux'
import {getFavouriteMovies} from '../action/index'

const Favourites = (props) => {

  const {getFavouriteMovies,favmovies} = props

  useEffect(() => {
    getFavouriteMovies()
  },[getFavouriteMovies])

  useEffect(() => {
    return () => {
    }
  },[])
  
  return (
    <div className='fav-container'>
      <img className='fav-icon' src={myFavIcon} alt=""/>
      <p className='my-fav medium'>My favourites</p>
      <div className='fav-count-container'>
        <p className=''>{favmovies.length}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {favmovies: state.myFavourites.myFavouriteMovies}
}

const MyFavourites = connect(mapStateToProps,{getFavouriteMovies})(Favourites)
export default MyFavourites
