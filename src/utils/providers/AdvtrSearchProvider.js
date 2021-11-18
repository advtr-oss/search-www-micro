import SearchProvider from './SearchProvider'
import JSONFetch from '../advtr-fetch'

// TODO: #27
export default class AdvtrSearchProvider extends SearchProvider {
  get name () {
    return 'ADVTR_SEARCH_PROVIDER'
  }

  async search (query, options) {
    const url = new URL(`${window.advtr.api.service('geolookup')}/geolookup`)

    url.searchParams.append('query', query)
    console.log(options)

    // These should come from both MapContext and redux respectively
    if (options.location) url.searchParams.append('location', `${options.location.lat},${options.location.lon}`)
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
