import { useEffect, useMemo, useState, useRef } from 'react'

import { parseGeoContainers } from '../utils'

import JSONFetch from '../../../../utils/fetch'

// This should take more data to correctly create the query, i.e. population size
const usePhotoQuery = (name, level2, level1, country) => {
  return [name, level1, country].join(',')
}

/**
 * @param {string} name
 * @param {Array<Object>} geoContainers
 * @param {'SecondLevelNationAdministrativeDivision' | 'FirstLevelNationAdministrativeDivision' | 'Country'} geoContainers.type
 * @param {string} geoContainers.name
 * */
const usePhotoFetch = (name, geoContainers) => {
  const query = useMemo(() => usePhotoQuery(...parseGeoContainers({ name, geoContainers })),
    [name, geoContainers]
  )

  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: null,
    isLoading: true,
    photos: []
  })

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetch = async (window) => {
      console.log('photo fetch')

      let data
      try {
        const uri = new URL(window.advtr.api.service('photos'))
        uri.pathname += '/photos/search'
        uri.searchParams.set('query', query)

        data = await JSONFetch(uri.toString(), { signal })
      } catch (err) {
        isMounted.current && setState({ isLoading: false, error: err, photos: [] })
        return
      }

      setState({ isLoading: false, error: null, photos: data.results })
    }

    fetch({ advtr: window.advtr })

    return () => {
      isMounted.current = false
      controller.abort()
    }
  }, [query])

  return [state.photos, state.error, state.isLoading]
}

export { usePhotoFetch }
