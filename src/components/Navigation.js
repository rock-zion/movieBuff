import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import MyFavourites from './MyFavourites'

const Navigation = () => {
  return (
    <div className="nav">
      <Link to='/'>
        <div><span className="extra-light">movie</span><span className="bold">BUFF</span></div>
      </Link>
      <Search />
      <div className="fav-logout-container">
      <MyFavourites />
      <Link className="log-out"  to='/logout'>
        <p className='logout-text regular'>Log out</p>
      </Link>
      </div>
    </div>
  )
}

export default Navigation
