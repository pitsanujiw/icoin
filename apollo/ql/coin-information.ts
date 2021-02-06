import { gql } from 'apollo'

const COIN_INFORMATION = gql`
  query($id: ID!) {
    asset(id: $id) {
      name
      changePercent24Hr
      priceUsd
      marketCapUsd
      supply
      symbol
      rank
      volumeUsd24Hr
      website
      explorer
    }
  }
`

export { COIN_INFORMATION }
