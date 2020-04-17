import '../src/frontend/styles/global.css'
import { ApolloProvider } from '@apollo/client'
import { AppType } from 'next/dist/next-server/lib/utils'
import client from '../src/frontend/graphql/client'

const App: AppType = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
