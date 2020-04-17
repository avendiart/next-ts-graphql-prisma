import React from 'react'
import { usePingQuery } from '../graphql/generated/graphql'

const HomeScreen = () => {
  const { data, loading } = usePingQuery()

  if (loading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="p-2">
          <div className="p-2">Loading</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {data?.ping ? (
        <div className="p-2">
          <div className="p-2 text-lg">GraphQL is up</div>
        </div>
      ) : (
        <div className="p-2">
          <div className="p-2 text-lg">GraphQL is down</div>
        </div>
      )}
    </div>
  )
}

export default HomeScreen
