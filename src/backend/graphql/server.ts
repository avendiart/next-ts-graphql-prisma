import { ApolloServer } from 'apollo-server-micro'
import { Resolvers } from '../graphql/generated/graphql'
import typeDefs from '../../graphql/schema'
import ping from './resolvers/queries/ping'

const resolvers: Resolvers = {
  Query: {
    ping,
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export default apolloServer.createHandler({
  path: '/api/graphql',
})
