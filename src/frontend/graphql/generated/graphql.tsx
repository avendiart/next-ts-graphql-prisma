import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  ping?: Maybe<Scalars['Boolean']>
}

export type PingQueryVariables = {}

export type PingQuery = { __typename?: 'Query' } & Pick<Query, 'ping'>

export const PingDocument = gql`
  query Ping {
    ping
  }
`

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PingQuery, PingQueryVariables>) {
  return ApolloReactHooks.useQuery<PingQuery, PingQueryVariables>(PingDocument, baseOptions)
}
export function usePingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, baseOptions)
}
export type PingQueryHookResult = ReturnType<typeof usePingQuery>
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>
export type PingQueryResult = ApolloReactCommon.QueryResult<PingQuery, PingQueryVariables>
