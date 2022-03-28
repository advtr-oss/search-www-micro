import SearchProvider from './SearchProvider'
import JSONFetch from '../advtr-fetch'

import { standardiseCoordinates } from '../coords'

// TODO: #27
export default class AdvtrSearchProvider extends SearchProvider {
  get name () {
    return 'ADVTR_SEARCH_PROVIDER'
  }

  async search (query, options) {
    const url = new URL(`${window.advtr.api.service('geolookup')}/geolookup`)

    url.searchParams.append('query', query)
    console.log(options)

    // TODO: Find why some are lng, and some are lon
    // as for now this will do to hide the issues lmao
    const coords = standardiseCoordinates(options.location)
    // These should come from both MapContext and redux respectively
    if (options.location) url.searchParams.append('location', `${coords.lat},${coords.lon}`)
    if (options.session) url.searchParams.append('sessiontoken', options.session)

    const request = new Request(url.href)
    return JSONFetch(request)
  }

  async getDetails (placeid, options = {}) {
    const url = new URL(`${window.advtr.api.service('geolocation')}/geolocation/${placeid}`)

    if (options.session) url.searchParams.append('sessiontoken', options.session)

    const request = new Request(url.href)
    return JSONFetch(request)
  }
}
