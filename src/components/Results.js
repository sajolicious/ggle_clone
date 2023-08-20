import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useResultContext } from './context/ResultContextProvider'
import Loading from './Loading'

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    getResults("messi&num=20")
  }, [])

  if (loading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex">
          {/*results ?.results ?.map(({link,title})=(

          ))*/}
        </div>
      )
      default :
  }
}
 