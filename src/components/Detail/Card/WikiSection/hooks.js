import wikipedia from 'wikipedia'
import { useStore } from 'react-redux'
import { useEffect, useMemo, useState, useRef } from 'react'

import { parseGeoContainers } from '../utils'

import JSONFetch from '../../../../utils/fetch'
import {getCookie} from "@advtr/tidy";

// This should take more data to correctly create the query, i.e. population size
const useWikiQuery = (name, level2, level1, country) => {
  return [name, level1, country].join(',')
}

/**
 * @param {string} name
 * @param {Array<Object>} geoContainers
 * @param {'SecondLevelNationAdministrativeDivision' | 'FirstLevelNationAdministrativeDivision' | 'Country'} geoContainers.type
 * @param {string} geoContainers.name
 * */
const useWikiFetch = (name, geoContainers) => {
  const { language: { locale } } = useStore().getState()

  const query = useMemo(() => useWikiQuery(...parseGeoContainers({ name, geoContainers })),
    [name, geoContainers]
  );

  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: null,
    isLoading: true,
    data: {}
  })


  useEffect(() => {
    const fetch = async (window) => {
      let data
      try {
        wikipedia.setLang(locale)

        const results = await wikipedia.search(query)
        data = await wikipedia.summary(results.results[0].title)
      } catch (err) {
        isMounted.current && setState({ isLoading: false, error: err, data: null })
        return
      }

      setState({ isLoading: false, error: null, data: data })
    }

    const reported = new Set(JSON.parse(getCookie('FEEDBACK:WIKI:REPORTED')) || [])
    console.log(reported, query)
    !reported.has(query) && fetch(window)

    return () => {
      isMounted.current = false
    }
  }, [query])

  return [state.data, state.error, state.isLoading, query]
}

export { useWikiFetch }
