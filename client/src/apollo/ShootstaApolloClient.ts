import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import { HttpLink } from "apollo-link-http"

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}


// configure an ApolloClient
const ShootstaApolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
  // @ts-ignore
  defaultOptions: defaultOptions
})

export default ShootstaApolloClient

