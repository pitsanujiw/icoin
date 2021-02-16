import { gql } from 'apollo'

const GLOBALS = gql`
  {
    marketTotal {
      marketCapUsd
      exchangeVolumeUsd24Hr
      assets
      exchanges
      markets
    }
    asset(id: "bitcoin") {
      priceUsd
      marketCapUsd
      volumeUsd24Hr
    }
  }
`

export { GLOBALS }
