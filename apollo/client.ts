import { ApolloClient, InMemoryCache } from '@apollo/client'

/**
 * @description Create a apollo client for fetching data from server by using GraphQL
 *
 * @see What is process.env.NEXT_PUBLIC_COINCAP_GRAPHQL? Well check .env.dev
 */
const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_COINCAP_GRAPHQL,
  /**
   * @description Store the data in the memory cahe, make our application to be faster
   */
  cache: new InMemoryCache()
})

export { apolloClient }
export * from '@apollo/client'
