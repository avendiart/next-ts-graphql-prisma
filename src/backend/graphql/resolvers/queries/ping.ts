import { Resolvers } from '../../generated/graphql'

const ping: Resolvers['Query']['ping'] = async () => {
  return true
}

export default ping
