import React from 'react'
import './displayFaction.css'
import '../global.css'

export const DisplayFaction = ({ faction, callback, text = 'add' }) => {
  return (
    <label onClick={() => callback(faction)}>
      <div className="faction factionBorder flex">
        <span className="factionName">{faction.name}</span>
        <div className="add_faction_container flex flexEnd">
          <button className="add_faction_btn">{text}</button>
        </div>
      </div>
    </label>
  )
}
