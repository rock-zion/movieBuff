import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PosterContainer from './PosterContainer';
import MovieOverview from './MovieOverview'
import LogIn from './LogIn'
import SearchDisplay from './SearchDisplay'

const Main = () => {
  return (
    <main className="Zimmer">
      <Switch>
        <Route exact path='/' component={PosterContainer}/>
        <Route path='/movieoverview/:movieid/:moviename' component={MovieOverview} />
        <Route path='/logout' component={LogIn} />
        <Route path="/search/:searchQuery" component={SearchDisplay}/>
      </Switch>
    </main>
  )
}

export default Main