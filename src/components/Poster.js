import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Poster = (props) => {
  const {overview,poster,movieid,moviename,overviewposter} = props
  return (
      <Fragment>
      <div className={`${props.overviewposter} poster`} >
          <div className="poster-container" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w342/${poster})`}}>
          <Link className="overview-link" to={`/movieoverview/${movieid}/${moviename}`}>
            {overviewposter? null : <div className="synopsis-background"><p className="synopsis light">{overview}</p></div>}
          </Link>
          </div>
        </div>
      </Fragment>
  )
}

export default Poster
