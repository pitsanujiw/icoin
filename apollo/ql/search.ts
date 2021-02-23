import { gql } from 'apollo'

const SEARCH = gql`
  query($search: String) {
    assets(
      first: 5
      where: {
        OR: [{ name_starts_with: $search, symbol_starts_with: $search }]
      }
    ) {
      edges {
        node {
          id
          name
          symbol
        }
      }
    }
    exchanges(first: 4, where: { name_starts_with: $search }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export { SEARCH }
