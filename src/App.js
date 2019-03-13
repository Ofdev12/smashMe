import React from 'react'
import './App.css'
import { Router } from '@reach/router'
import { Home } from './component/Home.js'
import { GameCreator } from './component/GameCreator.js'
import { DraftGame } from './component/DraftGame.js'
import { HandleTeam } from './component/HandleTeam.js'
import { Profile } from './component/Profile.js'
import { Nav } from './component/Nav.js'

export const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <GameCreator path="/gameCreator" />
        <DraftGame path="/draftGame" />
        <HandleTeam path="/handleTeam" />
        <Profile path="/profile" />
      </Router>
    </div>
  )
}
