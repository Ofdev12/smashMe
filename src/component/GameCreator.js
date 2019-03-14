import React, { useState, useEffect } from 'react'
import { PageContainer } from './ui/PageContainer.js'
import { DisplayFaction } from './ui/DisplayFaction.js'
import { DisplayPeople } from './ui/DisplayPeople.js'
import { getFaction } from '../db/db.js'

import './gameCreator.css'
import './global.css'

const getFactions = async setFactions => setFactions(await getFaction())

export const GameCreator = () => {
  const [factions, setFactions] = useState([])
  const [selectedFactions, setSelectedFactions] = useState([])
  const [peopleOnTeam, setPeopleOnTeam] = useState([])
  const [inputField, setInputField] = useState('')
  const [error, setError] = useState('')
  const [paired, setPaired] = useState({})
  const [factionsFiltered, setFactionsFiltered] = useState([])

  useEffect(() => {
    getFactions(setFactions)
  }, [])

  const selectFactions = faction => {
    if (selectedFactions.find(elem => elem === faction.name)) {
      setError('This faction is already selected')
    } else {
      const addSelectedFactions = [...selectedFactions, faction]
      setSelectedFactions(addSelectedFactions)
      const newFactions = factions.filter(elem => elem.name !== faction.name)
      setFactions(newFactions)
    }
  }

  const selectAllFactions = str => {
    if (str === 'add') {
      setSelectedFactions([...selectedFactions, ...factions])
      setFactions([])
    }
    if (str === 'remove') {
      setFactions([...factions, ...selectedFactions])
      setSelectedFactions([])
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
  const removePeople = gens => {
    const newPeople = peopleOnTeam.filter(elem => elem !== gens)
    setPeopleOnTeam(newPeople)
  }

  const addPeopleOnTeam = value => {
    setError('')
    if (!inputField) {
      setError('You need to enter a name')
      return
    }
    if (peopleOnTeam.find(ppl => ppl === inputField)) {
      setError('This mate is already on the game')
    }
    setPeopleOnTeam([...peopleOnTeam, inputField])
    setInputField('')
  }
  let factionInGame = []

  const getRandomFaction = () => {
    const randomfaction =
      selectedFactions[Math.floor(Math.random() * selectedFactions.length)].name
    if (factionInGame.find(elem => elem === randomfaction)) {
      return getRandomFaction()
    }
    factionInGame.push(randomfaction)
    return randomfaction
  }

  const searchFaction = str => {
    const filteredFactions = factions.filter(fac =>
      fac.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    )
    setFactionsFiltered(filteredFactions)
  }

  const doTheTeam = async () => {
    let matchedFactions = {}
    setPaired({})
    setError('')
    if (
      peopleOnTeam.length < 2 ||
      peopleOnTeam.length * 2 > selectedFactions.length
    ) {
      setError('You need to add more faction')
    } else {
      for (let ppl of peopleOnTeam) {
        let drawFaction = getRandomFaction()
        let drawFaction2 = getRandomFaction()
        matchedFactions = {
          ...matchedFactions,
          [ppl]: [drawFaction, drawFaction2]
        }
      }
      setPaired(matchedFactions)
    }
  }

  return (
    <div>
      <PageContainer customClass={'flex'}>
        <div className="flexColumn maxw">
          <h1>Set Up your game</h1>
          <h2>Add your friend</h2>
          <div className="border big_pannel">
            <form>
              <div className="form_team">
                <input
                  id="text-input"
                  placeholder="Placeholder text"
                  value={inputField}
                  onChange={e => setInputField(e.target.value)}
                />
                <button
                  className="submit_button"
                  onClick={e => {
                    e.preventDefault()
                    addPeopleOnTeam()
                  }}
                >
                  +
                </button>
              </div>
            </form>
            <div className="flexAro error">
              <p>{error}</p>
            </div>
            <div className="list_people">
              {peopleOnTeam.map(gens => {
                return (
                  <DisplayPeople
                    gens={gens}
                    paired={paired}
                    removePeople={removePeople}
                    key={gens}
                  />
                )
              })}
            </div>
          </div>
          <div className="flexAro">
            <div className="flexColumn">
              <h2>Selection factions</h2>
              <input
                placeholder="find an faction"
                onChange={e => searchFaction(e.target.value)}
              />
              <div className="border pannel factionText">
                {factionsFiltered && factionsFiltered.length > 0
                  ? factionsFiltered.map(faction => {
                      return (
                        <DisplayFaction
                          faction={faction}
                          callback={selectFactions}
                          selectedFactions={selectedFactions}
                          text={'+'}
                          key={faction.id}
                        />
                      )
                    })
                  : factions &&
                    factions.map(faction => {
                      return (
                        <DisplayFaction
                          faction={faction}
                          callback={selectFactions}
                          selectedFactions={selectedFactions}
                          text={'+'}
                          key={faction.id}
                        />
                      )
                    })}
              </div>
            </div>
            <div id="full_fac_container">
              <button
                className="full_fac_btn"
                onClick={() => selectAllFactions('add')}
              >
                {'Add All >>'}
              </button>
              <button
                className="full_fac_btn"
                onClick={() => selectAllFactions('remove')}
              >
                {'<< Rem All'}
              </button>
            </div>
            <div className="flexColumn">
              <h2>Selected factions</h2>
              <div className="border pannel factionText">
                {selectedFactions &&
                  selectedFactions.map(faction => {
                    return (
                      <DisplayFaction
                        faction={faction}
                        callback={removeFactions}
                        selectedFactions={selectedFactions}
                        text={'-'}
                        key={faction.id}
                      />
                    )
                  })}
              </div>
              <button onClick={doTheTeam}>Random</button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
