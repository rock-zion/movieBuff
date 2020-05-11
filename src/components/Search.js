import React, {useState, useEffect} from 'react'
import '../App.css'
import {connect} from 'react-redux'
import {searchMovies} from '../action/index'
import {withRouter} from 'react-router-dom'


const FindMovies = (props) => {

  const [searchQuery,setSearchQuery] = useState("")
  useEffect(() => {

  },[searchQuery])
  const processSearchQuery = (event) => {
    event.preventDefault()
    props.history.push(`/search/${searchQuery}`)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="search-container">
      <form action="" onSubmit={(e) => processSearchQuery(e)}>
        <label htmlFor="searchInput"></label>
        <input className="search" type="text" onChange={ (e) => handleChange (e)} placeholder="discover movies" id="searchInput"/>
          <input hidden type="submit" value="Go"/>
      </form>
    </div>
  )
}

const Search = connect(null,{searchMovies})(FindMovies)
export default withRouter(Search)
