import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {displayCast} from '../action/index'
import castDummy from '../assets/user.svg'

export const Cast = (props) => {
  const {movieid, cast} = props

  useEffect(() => {
    props.displayCast(movieid)
    //eslint-disable-next-line
  },[movieid])

  useEffect(() => {
  },[movieid])

  return (
    <>
      <h2 className='big-label regular'>Cast</h2>
      <div className='cast-mother'>
      {cast && cast.map((el,index) => {
        return (
          <div className='cast-container' key={index}>
          <div className='actor-image-container' style={el.profile_path === null ? styleForNullContainer : null}>
            <img className='actor-image' style={el.profile_path === null ? styleForNull : null}
              src={ el.profile_path === null ? `${castDummy}`:`http://image.tmdb.org/t/p/w780/${el.profile_path}`} 
              alt=""/>
          </div>
          <div className='actor-name-container'>
            <p className='actor-name regular'>{el.name}</p>
            <p className='character-name'>{el.character}</p>
          </div>
        </div>
        )
      })}

      </div>
    </>
  )
}
const styleForNullContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const styleForNull = {
  height: "48px",
  width: 'auto'
}

const mapStateToProps = (state) =>{
  return {
    cast: state.displayCast.displayCast
  }
}

const DisplayCast = connect(mapStateToProps,{displayCast})(Cast)
export default DisplayCast
