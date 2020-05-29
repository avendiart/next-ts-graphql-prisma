import fetch from 'node-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
    // @ts-ignore
    fetch,
  }),
})

export default client
