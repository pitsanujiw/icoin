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
    }
    asset(id: $id) {
      changePercent24Hr
      name
      symbol
    }
  }
`

export { COIN_CHART }
