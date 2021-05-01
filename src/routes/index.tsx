import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/home'
import Song from '../components/song'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/song" component={Song} />
    </Switch>
  )
}

export default Routes
