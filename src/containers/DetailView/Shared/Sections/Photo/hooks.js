import { useEffect, useState, useRef } from 'react'

// Create the URI with the new createURI function
const createURI = (query) => {
  const url = new URL(`${window.advtr.api.service('photos')}/photos/search`)
  url.searchParams.append('query', query)
  return url.href
}

const useFetch = (query) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    photos: []
  })

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchData = async () => {
      try {
        const res = await fetch(createURI(query), { signal })
        const data = await res.json()

        const photos = data.results.reduce((acc, curr) => {
          acc.push({
            alt: curr.alt,
            src: curr.urls.thumb,
            color: curr.color
          })

          return acc
        }, [])

        setState({ isLoading: false, photos, error: false })
      } catch (err) {
        if (isMounted.current) {
          setState({ isLoading: false, error: true, photos: [] })
        }
      }
    }

    fetchData()

    return () => {
      isMounted.current = false
      controller.abort()
    }
  }, [query])

  return state
}

export default useFetch
