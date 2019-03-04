import React, { useState, useEffect } from 'react'
import { PageContainer } from './ui/PageContainer.js'
import { DisplayFaction } from './ui/DisplayFaction.js'
import { getFaction } from '../db/db.js'

import './global.css'

const getFactions = async setFactions => setFactions(await getFaction())

export const GameCreator = () => {
  const [factions, setFactions] = useState([])
  const [selectedFactions, setSelectedFactions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getFactions(setFactions)
  }, [])

  console.log({ selectedFactions })

  const selectFactions = faction => {
    if (selectedFactions.find(elem => elem === faction.name)) {
      setError('This faction is already selected')
    } else {
      setSelectedFactions([...selectedFactions, faction])
      const newFactions = factions.filter(elem => elem.name !== faction.name)
      setFactions(newFactions)
    }
  }

  const removeFactions = faction => {
    if (factions.find(elem => elem === faction.name)) {
      setError('This faction is already remove')
    } else {
      setFactions([...factions, faction])
      const newFactions = selectedFactions.filter(
        elem => elem.name !== faction.name
      )
      setSelectedFactions(newFactions)
    }
  }

  return (
    <div>
      <PageContainer customClass={'flex'}>
        <div className="flexColumn maxw">
          <h1>tu est dans la GameCreator Page</h1>
          <div className="flexAro">
            <div className="flexColumn">
              <h2>SELECTION FACTIONS</h2>
              <div className="border pannel factionText">
                {factions &&
                  factions.map(faction => {
                    return (
                      <DisplayFaction
                        faction={faction}
                        callback={selectFactions}
                        selectedFactions={selectedFactions}
                        text={'add'}
                        key={faction.id}
                      />
                    )
                  })}
              </div>
            </div>
            <div className="flexColumn">
              <h2>SELECTED FACTIONS</h2>
              <div className="border pannel factionText">
                {selectedFactions &&
                  selectedFactions.map(faction => {
                    return (
                      <DisplayFaction
                        faction={faction}
                        callback={removeFactions}
                        selectedFactions={selectedFactions}
                        text={'remove'}
                        key={faction.id}
                      />
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
