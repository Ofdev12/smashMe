import { initModel } from '../lib/hasura.js'
import { prepare } from '../lib/hasura.js'

export const faction = initModel('faction')(`
    id
    name
  `)
