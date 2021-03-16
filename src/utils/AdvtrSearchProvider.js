import SearchProvider from './SearchProvider'

export default class AdvtrSearchProvider extends SearchProvider {
  get name () {
    return 'ADVTR_SEARCH_PROVIDER'
  }

  async search (query, options) {
    const url = new URL(`https://api.${window.advtr.uri}/geolocation/autocomplete`)
    url.searchParams.append('input', query)

    // These should come from both MapContext and redux respectively
    if (options.location) url.searchParams.append('location', `${options.location.lat},${options.location.lon}`)
    if (options.session) url.searchParams.append('sessiontoken', options.session)

    const request = new Request(url.href)
    return (await fetch(request)).json()
  }

  async getDetails (placeid, options) {
    await super.getDetails(placeid, options)
  }
}
