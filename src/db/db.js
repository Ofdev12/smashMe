import { initModel } from './hasura.js'
import { prepare } from './hasura.js'

export const faction = initModel('faction')(`
    id
    name
  `)

export const getFaction = prepare(`query {
  faction {
    id
    name
  }
}`)
