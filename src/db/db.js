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

const eachFaction = [
  { name: 'Aliens' },
  { name: 'Dinosaures' },
  { name: 'Pirates' },
  { name: 'Petit Peuple' },
  { name: 'Super Combatants' },
  { name: 'Petites Magiciennes' },
  { name: 'Kaiju' },
  { name: 'Monstrapoches' },
  { name: 'Fées' },
  { name: 'Poneys Magiques' },
  { name: 'Chatons' },
  { name: 'Princesses' },
  { name: 'Cavalerie Ours' },
  { name: 'Fantômes' },
  { name: 'Plantes Carnivores' },
  { name: 'Steampunks' },
  { name: 'Explorateurs' },
  { name: 'Grands-Mères' },
  { name: 'Rockstars' },
  { name: 'Oursons' },
  { name: 'Chevaliers des Étoiles' },
  { name: "Voyageurs de l'Espace" },
  { name: 'Changeformers' },
  { name: 'Squatteurs de Trône' },
  { name: 'Vampires' },
  { name: 'Fourmis Géantes' },
  { name: 'Savants Fous' },
  { name: 'Loups-Garous' },
  { name: 'Cthulhu' },
  { name: 'Innsmouth' },
  { name: 'Grands Anciens' },
  { name: 'Université Miskatonic' },
  { name: 'Voyageurs du Temps' },
  { name: 'Singes Cyborgs' },
  { name: 'Métamorphes' },
  { name: 'Super Espions' },
  { name: 'Requins' },
  { name: 'Super Héros' },
  { name: 'Légendes de la Mythologie Grecque' },
  { name: 'Dragons' },
  { name: 'Orques' },
  { name: 'Guerriers' },
  { name: 'Halfelins' },
  { name: 'Prêtres' },
  { name: 'Nains' },
  { name: 'Elfes' },
  { name: 'Voleurs' },
  { name: 'Magiciens' },
  { name: 'All-Stars' }
]

export const addFaction = prepare(`
  mutation insert_addFaction($objects: [faction_insert_input!]! ) {
    insert_faction(objects: $objects) {
      returning {
        id
      }
    }
  }
  `)
