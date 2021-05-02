import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/home'
import Song from '../components/song'
import PlayList from '../components/playList'

function Routes() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/song" component={Song} />
        <Route path="/play_list" component={PlayList} />
      </Switch>
    </div>
  )
}

export default Routes
