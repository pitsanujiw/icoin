import { gql } from 'apollo'

const EXCHANGE_ASSET = gql`
  query(
    $assetId: ID!
    $first: Int!
    $direction: SortDirection
    $sort: AssetMarketSortInput
  ) {
    assetMarkets(
      assetId: $assetId
      direction: $direction
      first: $first
      sort: $sort
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          exchangeId
          exchangeName
          baseSymbol
          quoteSymbol
          volumeUsd24Hr
          priceUsd
          percentVolume
          updatedAt
        }
      }
    }
  }
`

export { EXCHANGE_ASSET }
