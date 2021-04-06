import JSONFetch from './advtr-fetch'

/**
 * Get the users location via geolocation
 * */
export default async function where () {
  const url = new URL(`https://where.${window.advtr.uri}/ip`)
  const request = new Request(url.href)
  return JSONFetch(request)
}
