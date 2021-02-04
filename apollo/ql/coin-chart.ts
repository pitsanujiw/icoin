import { gql } from 'apollo'

const COIN_CHART = gql`
  query($id: ID!, $interval: Interval!, $start: Date, $end: Date) {
    assetHistories(
      assetId: $id
      interval: $interval
      start: $start
      end: $end
    ) {
      priceUsd
      timestamp
      date
      __typename
    }
  }
`

export { COIN_CHART }
