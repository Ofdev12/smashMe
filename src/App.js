import React from 'react'
import './App.css'
import { Button, Navbar, Alignment } from '@blueprintjs/core'

export const App = () => {
  return (
    <div>
      <Navbar fixedToTop={true} className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SmashMe</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="map-create" text="New Game" />
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="people" text="Team" />
          <Button className="bp3-minimal" icon="person" text="Profile" />
        </Navbar.Group>
      </Navbar>
      <div className="containerPage">
        <h1 className="titre1">Smash Me</h1>
      </div>
    </div>
  )
}
