import { initClient } from '@hasura-ws/browser'
import { initPrepare } from '@hasura-ws/prepare'
import { buildModel } from '@hasura-ws/model'

export const client = initClient({
  address: 'wss://smashme.herokuapp.com/v1alpha1/graphql',
  adminSecret: 'NEIGE'
})

export const prepare = initPrepare(client)
export const initModel = buildModel(prepare)
