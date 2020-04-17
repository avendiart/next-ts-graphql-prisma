import fetch from 'node-fetch'
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }) => ({
        headers: {
          authorization: localStorage.getItem('token'),
          ...headers,
        },
      }))
      return forward(operation)
    }),
    new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
      // @ts-ignore
      fetch,
    }),
  ]),
})

export default client
