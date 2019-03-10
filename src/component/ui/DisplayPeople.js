import React from 'react'
import { Text } from '@blueprintjs/core'

import './displayPeople.css'
import '../global.css'

export const DisplayPeople = ({ gens, paired, removePeople }) => {
  return (
    <div className="flexColumn">
      <div className="peopleBorder">
        <Text className="peopleName">{gens}</Text>
        <button className="delete_button" onClick={() => removePeople(gens)}>
          -
        </button>
      </div>
      {paired &&
        paired[gens] &&
        paired[gens].map((fac, i) => (
          <span key={i} className="faction_draw">
            {fac}
          </span>
        ))}
    </div>
  )
}
