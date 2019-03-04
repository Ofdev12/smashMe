import React from 'react'
import { Button, Navbar, Alignment } from '@blueprintjs/core'
import { Link } from '@reach/router'

export const Nav = () => {
  return (
    <Navbar fixedToTop={true} className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>SmashMe</Navbar.Heading>
        <Navbar.Divider />
        <Link to="/">
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Link>
        <Link to="gameCreator">
          <Button className="bp3-minimal" icon="map-create" text="New Game" />
        </Link>
        <Navbar.Divider />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Divider />
        <Link to="/handleTeam">
          <Button className="bp3-minimal" icon="people" text="Team" />
        </Link>
        <Link to="/profile">
          <Button className="bp3-minimal" icon="person" text="Profile" />
        </Link>
      </Navbar.Group>
    </Navbar>
  )
}
