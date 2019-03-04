import React from 'react'
import { Button } from '@blueprintjs/core'
import './displayFaction.css'

export const DisplayFaction = ({ faction, callback, text = 'add' }) => {
  return (
    <div className="faction factionBorder">
      <span className="factionName">{faction.name}</span>
      <Button onClick={() => callback(faction)}>{text}</Button>
    </div>
  )
}
